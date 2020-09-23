import React, { useEffect, useState } from "react";
import { CardHeader } from "../Card";
import { IconButton } from "../Button";
import { clearInputError } from "../../../Validation";

const ModalHeader = React.memo((props) => {
  const { toggleOpen, allowClose, formId, ...attr } = props;

  // close functionallity
  const [closeConfirm, setCloseConfirm] = useState(false);
  const handleClose = (e) => {
    if (allowClose !== null) {
      if (allowClose) {
        toggleOpen && toggleOpen(false);
        clearInputError(formId);
      } else {
        setCloseConfirm(window.confirm("Are you sure to close ?"));
      }
    } else {
      toggleOpen && toggleOpen(false);
      clearInputError(formId);
    }
  };

  useEffect(() => {
    if (closeConfirm) {
      toggleOpen && toggleOpen(false);
      setCloseConfirm(false);
    }
  }, [closeConfirm, toggleOpen]);

  // end close functionality

  return (
    <CardHeader {...attr}>
      <IconButton
        flat
        size="sm"
        color="danger"
        title="Close"
        className="title-bottom"
        rounded
        onClick={handleClose}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g
            id="Icons/Basic/multiply"
            stroke="none"
            strokeWidth="1"
            fillRule="evenodd"
          >
            <g id="multiply" transform="translate(3.000000, 3.000000)">
              <path
                d="M10.41,9 L16.71,2.71 C17.1021222,2.31787783 17.1021222,1.68212217 16.71,1.29 C16.3178778,0.897877828 15.6821222,0.897877828 15.29,1.29 L9,7.59 L2.71,1.29 C2.31787783,0.897877838 1.68212218,0.897877842 1.29000001,1.29000001 C0.897877842,1.68212218 0.897877838,2.31787783 1.29,2.71 L7.59,9 L1.29,15.29 C1.10068735,15.4777666 0.994201676,15.7333625 0.994201676,16 C0.994201676,16.2666375 1.10068735,16.5222334 1.29,16.71 C1.4777666,16.8993127 1.73336246,17.0057983 2,17.0057983 C2.26663754,17.0057983 2.5222334,16.8993127 2.71,16.71 L9,10.41 L15.29,16.71 C15.4777666,16.8993127 15.7333625,17.0057983 16,17.0057983 C16.2666375,17.0057983 16.5222334,16.8993127 16.71,16.71 C16.8993127,16.5222334 17.0057983,16.2666375 17.0057983,16 C17.0057983,15.7333625 16.8993127,15.4777666 16.71,15.29 L10.41,9 Z"
                id="Path"
              ></path>
            </g>
          </g>
        </svg>
      </IconButton>
    </CardHeader>
  );
});

ModalHeader.defaultProps = {
  allowClose: null,
};

export default ModalHeader;
