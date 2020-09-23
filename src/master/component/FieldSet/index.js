import React from "react";
import PropTypes from "prop-types";
import "./fieldset-style.css";

const index = (props) => {
  const { legend, children, ...attributes } = props;
  return (
    <fieldset {...attributes} id="r-fieldset">
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
};

index.defaultprop = {
  legend: "legend here",
};

index.propTypes = {
  legend: PropTypes.string,
};

export default index;
