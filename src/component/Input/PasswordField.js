import React, { useState } from "react";
import PropTypes from "prop-types";
import { Password } from "../../../Pattern";
import { checkPattern } from "../../../Validation";
import Input from "./Input";

const PasswordField = props => {
  // props
  const { onKeyUp, className, type, required, ...attributes } = props;
  const [error, setError] = useState();
  const handleKeyUp = e => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(Password.pattern, Password.patternMsg, value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };

  return (
    <Input
      type={type}
      error={error}
      onKeyUp={handleKeyUp}
      required={required}
      {...attributes}
    />
  );
};

PasswordField.defaultProps = {
  required: true,
  type: "password"
};
PasswordField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
  icon: PropTypes.node,
  type: PropTypes.string
};

export default PasswordField;
