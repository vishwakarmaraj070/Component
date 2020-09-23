import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withInput from "./withInput";

const BorderInputLabel = React.memo((props) => {
  const { setInputTypeClass, label, children } = props;
  useEffect(() => {
    setInputTypeClass("border-input border-input-label");
  }, []);
  return (
    <div className="input-box">
      {children}
      <label>{label}</label>
      <span className="border" />
    </div>
  );
});

BorderInputLabel.defaultProps = {
  label: "label here",
};

export default withInput(BorderInputLabel);
