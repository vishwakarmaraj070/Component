import React, { useEffect, useState } from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

const Notification = React.memo((props) => {
  const {
    color,
    show,
    children,
    position,
    timer,
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

  const handleShow = () => {
    let toast = document.querySelector(
      `div[data-test="notification-${numberOfToast.length}"]`
    );
    if (toast) {
      toast.classList.add("show");
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
  timer: 2500,
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
