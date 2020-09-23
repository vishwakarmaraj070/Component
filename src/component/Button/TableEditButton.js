import React from "react";
import EditIconButton from "./EditIconButton";

const TableEditButton = React.memo((props) => {
  const { className, rounded, size, flat, ...attributes } = props;
  return (
    <EditIconButton
      flat
      className={`table-btn ${className}`}
      size="sm"
      rounded
      {...attributes}
    />
  );
});

TableEditButton.defaultProps = {
  className: "",
};
export default TableEditButton;
