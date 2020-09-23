import React from "react";
import Button from "./Button";

const SubmitButton = React.memo((props) => {
  const { children, type, ...attributes } = props;
  return (
    <Button type={type} {...attributes}>
      {children}
    </Button>
  );
});

SubmitButton.defaultProps = {
  children: "Save",
  type: "submit",
};

export default SubmitButton;
