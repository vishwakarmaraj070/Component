import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { ReactComponent as ErrorIcon } from "./errorSvg.svg";
import { checkExactLength } from "../../Validation";
import IconButton from "../Button/IconButton";

const Input = React.forwardRef((props, ref) => {
  const {
    type,
    id,
    size,
    hint,
    placeholder,
    onBlur,
    icon,
    hintRight,
    exact,
    autoComplete,
    label,
    errorRight,
    onClick,
    error,
    value,
    defaultValue,
    required,
    onKeyUp,
    borderStyle,
    maxLength,
    minLength,
    noCap,
    inputClasses,
    style,
    className,
    ...attributes
  } = props;

  const [isEmpty, setIsEmpty] = useState(false);
  const [isDisplayError, setDisplayError] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const erorrRef = createRef(null);

  // handle blur
  const handleBlur = (e) => {
    onBlur && onBlur(e);
    if (required) {
      if (e.target.value.trim().length) {
        setIsEmpty(true);
        setErrorMsg(null);
      } else {
        setIsEmpty(false);
        setErrorMsg(`Field required`);
      }
    }
  };
  const capitalizeFirstLetter = (target) => {
    const value = target.value;
    switch (target.type) {
      case "email":
      case "password":
        return;
      default:
        target.value = value.charAt(0).toUpperCase() + value.slice(1);
    }
  };

  // function onkeyup
  const handleKeyUp = (e) => {
    onKeyUp && onKeyUp(e);
    handleBlur(e);
    const value = e.target.value;
    // capitalize
    if (!noCap) {
      capitalizeFirstLetter(e.target);
    }
    // check exact
    if (value.length) {
      if (minLength) {
        if (value.length >= minLength) {
          setErrorMsg(null);
        } else {
          setErrorMsg(
            error ? null : `Minimum ${minLength} characters required`
          );
        }
      }
      if (exact) {
        const check = checkExactLength(value, exact);
        if (check.msg) {
          setErrorMsg(error ? null : check.msg);
        } else {
          setErrorMsg(null);
        }
      }
    } else {
      setErrorMsg(null);
    }
  };

  // classes
  // style box
  const styles = classnames(
    "r-input-box",
    "search",
    {
      "input-msg": hint,
    },
    className
  );

  // style input
  const inputStyles = classnames(
    "r-input",
    {
      [`input-${size}`]: size,
    },
    inputClasses
  );

  // label input
  const labelStyle = classnames("label-style");

  // style hint
  const hintStyles = classnames("r-hint", {
    right: hintRight,
  });

  // style error
  const errorStyles = classnames("r-error", {
    "display-error": isDisplayError,
    right: errorRight,
  });

  // style border
  const borderStyles = classnames(
    "r-input-border",
    {
      "fixed-border": isEmpty,
    },
    borderStyle
  );

  const handleErrorDisplay = (e) => {
    setDisplayError(!isDisplayError);
  };
  const handleClick = (e) => {
    onClick && onClick(e);
  };

  useEffect(() => {
    if (value || defaultValue) {
      if (erorrRef.current) {
        if (erorrRef.current.textContent) {
          if (
            String(erorrRef.current.textContent)
              .toLowerCase()
              .includes("required")
          ) {
            setIsEmpty(true);
            setErrorMsg(null);
          }
        }
      }
    }
  }, [value, defaultValue]);

  return (
    <div style={style} className={styles}>
      {label && (
        <div className="flex">
          <label className={labelStyle} htmlFor={id}>
            {label}
          </label>
          {required && (
            <div
              style={{
                color: "#c5c9d8",
                fontStyle: "italic",
                fontSize: "12px",
                marginLeft: "3px",
              }}
            >
              (required)
            </div>
          )}
        </div>
      )}
      <div style={{ position: "relative" }}>
        <input
          type={type}
          id={id}
          {...(errorMsg || error ? { error: "true" } : {})}
          className={inputStyles}
          placeholder={placeholder}
          onBlur={handleBlur}
          value={value}
          defaultValue={defaultValue}
          required={required}
          minLength={minLength}
          spellCheck={"false"}
          maxLength={maxLength || exact}
          onKeyUp={handleKeyUp}
          autoComplete={autoComplete}
          ref={ref}
          {...attributes}
        />
        {errorMsg ? (
          <IconButton
            flat
            rounded
            color="danger"
            onClick={handleErrorDisplay}
            style={{ opacity: 1 }}
          >
            <ErrorIcon />
          </IconButton>
        ) : error ? (
          <IconButton
            flat
            color="danger"
            rounded
            onClick={handleErrorDisplay}
            style={{ opacity: 1 }}
          >
            <ErrorIcon />
          </IconButton>
        ) : (
          ""
        )}

        {icon && (
          <IconButton
            flat
            onClick={handleClick}
            style={
              error
                ? { right: " 32px", zIndex: 5 }
                : errorMsg
                ? { right: " 32px", zIndex: 5 }
                : {}
            }
          >
            {icon}
          </IconButton>
        )}
      </div>

      {borderStyle !== "none" && <div className={borderStyles}></div>}
      {/* hint here */}
      {hint && <span className={hintStyles}>{hint}</span>}
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
});

Input.defaultProps = {
  type: "text",
  borderStyle: "none",
  autoComplete: "off",
};

Input.propTypes = {
  borderStyle: PropTypes.oneOf([`left`, "center", "right", "none"]),
  type: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
  hint: PropTypes.string,
  placeholder: PropTypes.string,
  onBlur: PropTypes.func,
  legendInput: PropTypes.bool,
  error: PropTypes.string,
  inputClasses: PropTypes.string,
  hintRight: PropTypes.bool,
  errorRight: PropTypes.bool,
  onKeyUp: PropTypes.func,
  exact: PropTypes.number,
  required: PropTypes.bool,
  label: PropTypes.string,
  minLength: PropTypes.number,
  maxLength: PropTypes.number,
};

export default Input;
