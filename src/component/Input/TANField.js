import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { TAN } from "../../../Pattern";
import { checkPattern } from "../../../Validation";

const TANField = (props) => {
  // props
  const { onKeyUp, required, onChange, ...attributes } = props;
  const [error, setError] = useState();
  // function here
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(TAN.pattern, TAN.patternMsg, value);
      setError(check.msg);
      if (!check.msg) {
        const numPlace = value.slice(4, 9);
        const reminder = Number(numPlace) % 7;
        console.log("reminder", reminder);
        const lastIs = value.trim().slice(value.length - 1);
        switch (reminder) {
          case 0:
            if (lastIs === "A" || lastIs === "H") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 1:
            if (lastIs === "B" || lastIs === "I") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 2:
            if (lastIs === "C" || lastIs === "J") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 3:
            if (lastIs === "D" || lastIs === "K") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 4:
            if (lastIs === "E" || lastIs === "L") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 5:
            if (lastIs === "F" || lastIs === "M") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          case 6:
            if (lastIs === "G" || lastIs === "N") {
              setError(null);
            } else {
              setError("Invalid TAN");
            }
            break;
          default:
            setError("Invalid TAN");
        }
      }
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
      onKeyUp={handleKeyUp}
      onChange={handleChange}
      exact={10}
      required={required}
      {...attributes}
    />
  );
};

TANField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

export default TANField;
