import React, { useState } from "react";
import PropTypes from "prop-types";
import { checkPattern } from "../../Validation";
import NumberField from "./NumberField";

const NumberPattern = (props) => {
  // props
  const { onKeyUp, required, pattern, patternMsg, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(pattern, patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };
  return (
    <NumberField
      error={error}
      onKeyUp={handleKeyUp}
      required={required}
      {...attributes}
    />
  );
};

NumberPattern.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
  patternMsg: PropTypes.string,
  pattern: PropTypes.string,
};

export default NumberPattern;
