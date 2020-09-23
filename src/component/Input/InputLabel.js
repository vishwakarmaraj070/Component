import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withInput from "./withInput";

const InputLabel = React.memo((props) => {
  const { children, setInputTypeClass, label } = props;
  useEffect(() => {
    setInputTypeClass("input input-label");
  }, []);
  return (
    <div className="input-box">
      {children}
      <label>{label}</label>
    </div>
  );
});

InputLabel.defaultProps = {
  label: "label here",
};

export default withInput(InputLabel);
