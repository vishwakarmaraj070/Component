import React from "react";
import Button from "./Button";

const CloseButton = React.memo((props) => {
  const { children, color, type, ...attributes } = props;
  return (
    <Button type={type} color={color} {...attributes}>
      {children}
    </Button>
  );
});

CloseButton.defaultProps = {
  children: "Close",
  type: "button",
  color: "close",
};

export default CloseButton;
