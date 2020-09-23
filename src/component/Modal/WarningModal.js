import React from "react";
import Modal from "./Modal";
import { Button, CloseButton } from "../../component/Button";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const WarningModal = React.memo((props) => {
  const { isLoading, icon, color, toggleOpen, msg, onClick, ...attr } = props;
  return (
    <Modal color="close" noBackDrop {...attr}>
      <ModalHeader
        toggleOpen={toggleOpen}
        icon={icon}
        title="Warning Confirm"
      />
      <ModalBody>
        <h3 style={{ textAlign: "center" }}>{msg}</h3>
      </ModalBody>
      <ModalFooter right>
        <Button
          size="sm"
          isLoading={isLoading}
          onClick={(e) => {
            onClick && onClick(e);
          }}
        >
          Yes
        </Button>
        <CloseButton
          size="sm"
          onClick={() => {
            toggleOpen && toggleOpen(false);
          }}
        />
      </ModalFooter>
    </Modal>
  );
});

WarningModal.defaultProps = {
  msg: "Msg you can send in msg props",
  icon: (
    <React.Fragment>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Icons/Basic/exclamation-triangle"
          stroke="none"
          strokeWidth="1"
          fillRule="evenodd"
        >
          <g
            id="exclamation-triangle"
            transform="translate(0.000000, 1.000000)"
          >
            <path
              d="M12,15 C11.4477153,15 11,15.4477153 11,16 C11,16.5522847 11.4477153,17 12,17 C12.5522847,17 13,16.5522847 13,16 C13,15.4477153 12.5522847,15 12,15 Z M22.67,16.47 L14.62,2.47 C14.0901651,1.52009115 13.0876819,0.931369221 12,0.931369221 C10.9123181,0.931369221 9.90983495,1.52009115 9.38,2.47 L1.38,16.47 C0.832050398,17.3941237 0.820106331,18.5407137 1.34868586,19.4760517 C1.87726538,20.4113897 2.86566315,20.9926651 3.94,21.0001463 L20.06,21.0001463 C21.1432727,21.0106755 22.1481555,20.4364936 22.6889793,19.4978225 C23.229803,18.5591514 23.2225485,17.4018175 22.67,16.47 Z M20.94,18.47 C20.7614803,18.7876202 20.4243389,18.983009 20.06,18.9800343 L3.94,18.9800343 C3.57566115,18.983009 3.2385197,18.7876202 3.06,18.47 C2.88136721,18.1605989 2.88136721,17.7794011 3.06,17.47 L11.06,3.47 C11.231096,3.13603378 11.5747571,2.92596052 11.95,2.92596052 C12.3252429,2.92596052 12.668904,3.13603378 12.84,3.47 L20.89,17.47 C21.0921048,17.7752198 21.1112841,18.1664769 20.94,18.49 L20.94,18.47 Z M12,7 C11.4477153,7 11,7.44771525 11,8 L11,12 C11,12.5522847 11.4477153,13 12,13 C12.5522847,13 13,12.5522847 13,12 L13,8 C13,7.44771525 12.5522847,7 12,7 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    </React.Fragment>
  ),
};

export default WarningModal;
