import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ActionLoader from "./actionLoading.svg";

const Radio = (props) => {
  const {
    className,
    color,
    onFocus,
    onBlur,
    isLoading,
    label,
    ...attributes
  } = props;

  const [isFocus, setFocus] = useState(false);

  //
  const checkboxClasses = classnames(
    `radio radio-${color}`,
    { isLoading },
    isFocus && "focus",
    className
  );
  return (
    <label className={checkboxClasses}>
      {!isLoading ? (
        <div className="radio-container">
          <input
            type="radio"
            {...attributes}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setFocus(true);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e);
              setFocus(false);
            }}
          />
          <span className="before" />
          <span className="after" />
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

Radio.defaultProps = {
  color: "primary",
};

Radio.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
};

export default Radio;
