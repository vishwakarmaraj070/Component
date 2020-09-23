import React from "react";
import Modal from "./Modal";
import { MoreButton, SubmitButton } from "../Button";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

const FormModal = React.memo((props) => {
  const {
    icon,
    title,
    onClick,
    isLoading,
    firstBtn,
    secondBtn,
    isSecondLoading,
    onSecondClick,
    children,
    toggleOpen,
    allowClose,
    ...attr
  } = props;

  return (
    <Modal {...attr}>
      <ModalHeader
        icon={icon}
        title={title}
        toggleOpen={toggleOpen}
        allowClose={allowClose}
      />
      <div style={{ overflow: "auto", maxHeight: "85vh" }}>
        <ModalBody>
          <div style={{ overflow: "auto", minHeight: "85vh" }}>{children} </div>
        </ModalBody>
        <ModalFooter right>
          {secondBtn && (
            <MoreButton
              size="sm"
              isLoading={isSecondLoading}
              children={secondBtn}
              onClick={(e) => {
                onSecondClick && onSecondClick(e);
              }}
            />
          )}
          <SubmitButton
            size="sm"
            isLoading={isLoading}
            children={firstBtn}
            onClick={(e) => {
              onClick && onClick(e);
            }}
          />
        </ModalFooter>
      </div>
    </Modal>
  );
});

FormModal.defaultProps = {
  allowClose: false,
};

export default FormModal;
