import React from "react";
import Button from "./Button";

const MoreButton = React.memo((props) => {
  const { children, color, type, ...attributes } = props;
  return (
    <Button type={type} color={color} {...attributes}>
      {children}
    </Button>
  );
});

MoreButton.defaultProps = {
  children: "Save and Continoue",
  type: "button",
  color: "secondary",
};

export default MoreButton;
