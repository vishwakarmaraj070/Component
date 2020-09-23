import React from "react";
import Button from "./Button";

const DeleteButton = React.memo((props) => {
  const { children, color, type, ...attributes } = props;
  return (
    <Button type={type} color={color} {...attributes}>
      {children}
    </Button>
  );
});

DeleteButton.defaultProps = {
  children: "Delete",
  type: "button",
  color: "danger",
};

export default DeleteButton;
