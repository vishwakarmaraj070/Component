import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { useAudio } from "../useAudio";

const withModal = (OriginalComponent) => {
  const WithModal = React.memo(
    React.forwardRef((props, ref) => {
      const {
        position,
        open,
        isLoading,
        noBackDrop,
        toggleOpen,
        children,
        className,
        ...attributes
      } = props;

      const [backdropClick, setbackDropClick] = useState(false);
      const [show, setShow] = useState(false);
      useEffect(() => {
        if (open) {
          setShow("open");
        } else {
          setTimeout(() => {
            setShow("");
          }, 400);
        }
      }, [open]);

      useEffect(() => {
        if (backdropClick) {
          useAudio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/error.mp3")
          setTimeout(() => {
            setbackDropClick(false);
          }, 400);
        }
      }, [backdropClick]);

      const [modalName, setModalName] = useState("");
      const cardClasses = classnames(
        "modal-2-0-0 rmodal modal2",
        modalName,
        show,
        backdropClick && "modal-shink",
        { noBackDrop }
      );

      const modalDialogStyle = classnames("modal-dialog", {
        [`modal-${String(position).toLowerCase()}`]: position,
      });

      return (
        <div className={cardClasses}>
          <div
            className="modal-backdrop"
            onClick={() => setbackDropClick(true)}
          ></div>
          <div className={modalDialogStyle}>
            <div className={`modal-content ${className} `} ref={ref}>
              <OriginalComponent
                children={children}
                {...attributes}
                setModalName={setModalName}
              />
            </div>
          </div>
        </div>
      );
    })
  );

  WithModal.defaultProps = {
    position: "center",
    className: "",
    allowClose: null,
  };

  WithModal.propTypes = {
    noBackDrop: PropTypes.bool,
    open: PropTypes.bool,
    size: PropTypes.string,
    position: PropTypes.oneOf([
      "center",
      "top-left",
      "top-right",
      "bottom-left",
      "bottom-right",
    ]),
  };
  return WithModal;
};

export default withModal;
