import React, { useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { useAudio } from "../useAudio";

const Notification = React.memo((props) => {
  const {
    color,
    show,
    children,
    position,
    timer,
    audioType="success",
    toggle,
    className,
    ...attributes
  } = props;

  const [numberOfToast, setNumberOfToast] = useState([]);

  const toastClasses = classnames(
    "notification-2-0-0 notification2 ",
    `notification-${color}`,
    position,
    className
  );

  const soundLists = {
    "success" : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3',
    "faild" : 'https://notificationsounds.com/storage/sounds/file-sounds-1137-eventually.mp3',
    "update" : 'https://notificationsounds.com/storage/sounds/file-sounds-1150-pristine.mp3',
    "warning" : 'https://notificationsounds.com/storage/sounds/file-sounds-1133-anxious.mp3'

  }

  const handleShow = () => {
    let toast = document.querySelector(
      `div[data-test="notification-${numberOfToast.length}"]`
    );
    if (toast) {
      toast.classList.add("show");
       setTimeout(() => {
        useAudio(soundLists["success"])
      }, 100)
    }
  };

  const handleClose = () => {
    let toast = document.querySelectorAll(".toast");
    if (toast[0]) {
      toast[0].classList.remove("show");
      setTimeout(() => {
        toast[0].parentNode.removeChild(toast[0]);
      }, 200);
    }
  };





  useEffect(() => {
    if (toggle) {
      setTimeout(() => {
        toggle(false);
        handleShow();
      }, 200);
    }

    // count notification
    if (show) {
      setNumberOfToast([...numberOfToast, numberOfToast.length + 1]);
      setTimeout(() => {
        handleClose();
      }, timer);
    }
  }, [show]);

  return (
    <div className={toastClasses}>
      {numberOfToast.length > 0 &&
        numberOfToast.map((toast) => (
          <div
            key={toast}
            data-test={`notification-${toast}`}
            className={`toast`}
            {...attributes}
          >
            {children}
            <span className="notification-closer" />
          </div>
        ))}
    </div>
  );
});
Notification.defaultProps = {
  color: "primary",
  position: "top-right",
  timer: 2000,
};

Notification.propTypes = {
  color: PropTypes.string,
  show: PropTypes.bool,
  timer: PropTypes.number,
  children: PropTypes.node.isRequired,
  toggle: PropTypes.func,
  position: PropTypes.oneOf([
    "center",
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ]),
};

export default Notification;
