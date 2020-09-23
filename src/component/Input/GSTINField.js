import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const GSTINField = (props) => {
  // props
  const { onKeyUp, required, onChange, ...attributes } = props;
  const [error, setError] = useState();

  // function here
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      // const check = checkPattern(GSTIN.pattern, GSTIN.patternMsg, value);
      const checksumValidation = checksum(value);
      if (checksumValidation) {
        setError(null);
      } else {
        setError("Invalid GSTIN");
      }
    } else {
      setError(null);
    }
  };

  const checksum = (g) => {
    let regTest = /\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(
      g
    );
    console.log(regTest);
    if (regTest) {
      let a = 65,
        b = 55,
        c = 36;
      let p;
      return Array["from"](g).reduce((i, j, k, g) => {
        p =
          (p =
            (j.charCodeAt(0) < a ? parseInt(j) : j.charCodeAt(0) - b) *
            ((k % 2) + 1)) > c
            ? 1 + (p - c)
            : p;
        return k < 14
          ? i + p
          : j == ((c = c - (i % c)) < 10 ? c : String.fromCharCode(c + b));
      }, 0);
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
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      required={required}
      {...attributes}
    />
  );
};

GSTINField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

export default GSTINField;
