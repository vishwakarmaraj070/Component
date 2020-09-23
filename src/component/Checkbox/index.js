import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ActionLoader from "./actionLoading.svg";
import CheckIcon from "./check.svg";

const Checkbox = (props) => {
  const {
    color,
    indeterminate,
    isLoading,
    className,
    label,
    onFocus,
    onBlur,
    id,
    ...attributes
  } = props;
  const [isFocus, setFocus] = useState(false);

  const checkboxClasses = classnames(
    `checkbox checkbox-${color}`,
    {
      indeterminate,
      isLoading,
    },
    isFocus && "focus",
    className
  );

  return (
    <label className={checkboxClasses} htmlFor={id}>
      {!isLoading ? (
        <div className="check-container">
          <input
            id={id}
            type="checkbox"
            indeterminate={indeterminate}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setFocus(true);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e);
              setFocus(false);
            }}
            {...attributes}
          />
          <span className="before" />
          <CheckIcon className="after" />
        </div>
      ) : (
        <ActionLoader />
      )}
      {label && (
        <span
          className="Small-Body-Copy-RegularSmall-body-copy-Regular-Default ckeckbox-label"
          style={{ marginLeft: "8px" }}
        >
          {label}
        </span>
      )}
    </label>
  );
};

Checkbox.defaultProps = {
  color: "primary",
};

Checkbox.propTypes = {
  color: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  indeterminate: PropTypes.bool,
};

export default Checkbox;
