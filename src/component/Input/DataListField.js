import React from "react";
import PropTypes from "prop-types";
import PatternField from "./PatternField";

const DataListField = props => {
  const { className, id, children, placeholder, ...attributes } = props;
  return (
    <div className={className}>
      <PatternField list={id} {...attributes} placeholder={placeholder} />
      <datalist id={id}>{children}</datalist>
    </div>
  );
};

DataListField.defaultProps = {
  id: "datalist",
  placeholder: "Select or Search"
};
DataListField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string
};

export default DataListField;
