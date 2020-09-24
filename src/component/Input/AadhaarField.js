import React, { useState } from "react";
import PropTypes from "prop-types";
import { Aadhar } from "../../Pattern";
import { checkPattern } from "../../Validation";
import NumberField from "./NumberField";

const AadhaarField = (props) => {
  // props
  const { onKeyUp, required, ...attributes } = props;
  const [error, setError] = useState();
  // function here
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkPattern(Aadhar.pattern, Aadhar.patternMsg, value);
      setError(check.msg);
      if (!check.msg) {
        // validates Aadhar number received as string
        const d = [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
          [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
          [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
          [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
          [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
          [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
          [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
          [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
          [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
        ];
        // permutation table
        const p = [
          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
          [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
          [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
          [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
          [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
          [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
          [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
          [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
        ];
        let c = 0;
        let invertedArray = value.split("").map(Number).reverse();
        invertedArray.forEach((val, i) => {
          c = d[c][p[i % 8][val]];
        });
        console.log("adhar-valid", c);
        if (c === 0) {
          setError(null);
        } else {
          setError("Invalid aadhar");
        }
      }
    } else {
      setError(null);
    }
  };
  return (
    <NumberField
      error={error}
      onKeyUp={handleKeyUp}
      exact={12}
      required={required}
      {...attributes}
    />
  );
};

AadhaarField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

export default AadhaarField;
