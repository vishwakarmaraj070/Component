import React, { useState, createRef, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SelectField = (props) => {
  // props
  const {
    className,
    hint,
    error,
    size,
    hintRight,
    defaultText,
    label,
    errorRight,
    onBlur,
    defaultValue,
    value,
    onChange,
    required,
    children,
    ...attributes
  } = props;

  const [errorMsg, setErrorMsg] = useState();

  // handle blur
  const handleBlur = (e) => {
    onBlur && onBlur(e);
    if (required) {
      onBlur && onBlur(e);
      if (required) {
        if (e.target.value !== "-1") {
          setErrorMsg(null);
        } else {
          setErrorMsg(`Field required`);
        }
      }
    }
  };

  const handleChange = (e) => {
    onChange && onChange(e);
    if (e.target.value !== "-1") {
      setErrorMsg(null);
    } else {
      setErrorMsg(`Field required`);
    }
  };

  // classes
  const selectStyle = classnames(
    "r-select r-input-box",
    {
      "input-msg": hint || error || errorMsg,
      [`select-${size}`]: size,
    },
    className
  );
  // label input
  const labelStyle = classnames("label-style");
  // style hint
  const hintStyles = classnames("r-hint", {
    right: hintRight,
  });
  // style error
  const errorStyles = classnames("r-error", {
    right: errorRight,
  });

  const erorrRef = createRef(null);
  useEffect(() => {
    if (value || defaultValue) {
      if (erorrRef.current) {
        if (erorrRef.current.textContent) {
          if (
            String(erorrRef.current.textContent)
              .toLowerCase()
              .includes("required")
          ) {
            setErrorMsg(null);
          }
        }
      }
    }
  }, [value, defaultValue]);

  return (
    <div className={selectStyle}>
      {/* label */}
      {label && <label className={labelStyle}>{label}</label>}
      {/* select */}
      <select
        {...(errorMsg || error ? { error: "true" } : {})}
        onBlur={handleBlur}
        onChange={handleChange}
        required={required}
        value={value == 0 ? value : value ? value : "-1"}
        defaultValue={
          defaultValue == 0 ? defaultValue : defaultValue ? defaultValue : "-1"
        }
        {...attributes}
      >
        <option disabled value="-1">
          {defaultText}
        </option>
        {children}
      </select>

      {/* hint here */}
      {hint && !error && !errorMsg && (
        <span className={hintStyles}>{hint}</span>
      )}
      {/* error here */}
      {errorMsg ? (
        <span className={errorStyles} ref={erorrRef}>
          {errorMsg}
        </span>
      ) : error ? (
        <span className={errorStyles} ref={erorrRef}>
          {error}
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

SelectField.defaultProps = {
  defaultText: "select",
  value: "-1",
};

SelectField.propTypes = {
  size: PropTypes.oneOf(["sm", "lg"]),
  hint: PropTypes.string,
  error: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  label: PropTypes.string,
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"]),
};

export default SelectField;
