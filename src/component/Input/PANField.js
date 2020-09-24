import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { PAN } from "../../Pattern";
import { checkPattern } from "../../Validation";

const PANField = (props) => {
  // props
  const { onKeyUp, required, onChange, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(PAN.pattern, PAN.patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };

  const handleChange = (e) => {
    const value = String(e.target.value).toUpperCase();
    const target = e.target;
    target.value = value;
    onChange && onChange(e);
  };
  return (
    <Input
      error={error}
      onChange={handleChange}
      onKeyUp={handleKeyUp}
      exact={10}
      required={required}
      {...attributes}
    />
  );
};

PANField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

export default PANField;
