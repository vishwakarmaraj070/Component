import React from "react";
import DeleteIconButton from "./DeleteIconButton";

const TableDeleteButton = React.memo((props) => {
  const { className, rounded, size, flat, ...attributes } = props;
  return (
    <DeleteIconButton
      flat
      className={`table-btn ${className}`}
      size={size}
      rounded={rounded}
      {...attributes}
    />
  );
});

TableDeleteButton.defaultProps = {
  className: "",
  rounded: true,
  size: "sm",
};
export default TableDeleteButton;
