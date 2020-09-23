import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { IconButton } from "../Button";
import { ReactComponent as ErrorIcon } from "../../assets/svg/errorSvg.svg";

const withInput = (OriginalComponent) => {
  const WithInput = React.memo(
    React.forwardRef((props, ref) => {
      const {
        animatedBorder,
        inputBg,
        placeHolder,
        label,
        icon,
        leftIcon,
        rightIcon,
        size,
        children,
        error,
        required,
        onBlur,
        hint,
        onClick,
        ...attr
      } = props;

      // error style here
      const errorRef = useRef(null);
      const [errorBoxStyle, setErrorBoxStyle] = useState({
        marginBottom: "30px",
      });
      const [errorMsg, setErrorMsg] = useState("");
      useEffect(() => {
        if (errorRef.current) {
          setErrorBoxStyle({
            marginBottom: `${errorRef.current.scrollHeight}px`,
          });
          console.log("error");
        }
        setErrorMsg(error);
      }, [error]);

      //end error style here

      const [inpuTypeClass, setInputTypeClass] = useState("");
      const [valueLength, setValueLength] = useState(false);
      const [toggleError, setToggleError] = useState(false);
      const inputClasses = classnames(
        "input2",
        inpuTypeClass,
        valueLength && "flot-fix",
        leftIcon && "left-icon",
        rightIcon && "right-icon",
        (icon || errorMsg) && "input-icon",
        icon && errorMsg && "both-icon",
        errorMsg && "error",
        {
          [`input-${size}`]: size,
          inputBg,
        },
        String(animatedBorder).toLowerCase() !== "none" && [
          `animatedBorder-${animatedBorder}`,
        ]
      );

      const handleOnBlur = (e) => {
        onBlur && onBlur(e);
        const value = e.target.value;
        if (value.length) {
          setValueLength(true);
        } else {
          setValueLength(false);
          if (required) {
            setErrorMsg("Field required");
          }
        }
      };

      return (
        <div className={"input-2-0-0 rinput"}>
          <div
            className={inputClasses}
            style={errorMsg && toggleError ? errorBoxStyle : {}}
          >
            <OriginalComponent
              children={children}
              setInputTypeClass={setInputTypeClass}
              label={label}
            >
              <input
                {...attr}
                ref={ref}
                required={required}
                onBlur={handleOnBlur}
                placeholder={
                  String(inpuTypeClass).includes("border-input") && !placeHolder
                    ? String(inpuTypeClass).includes("border-input-label")
                      ? ""
                      : "placeHolder"
                    : placeHolder
                }
              />
              <span className="input-icon">
                {icon && (
                  <IconButton
                    flat
                    size={size}
                    rounded
                    onClick={(e) => onClick && onClick(e)}
                  >
                    {icon}
                  </IconButton>
                )}
                {errorMsg && (
                  <IconButton
                    color="danger"
                    flat
                    size={size}
                    rounded
                    onClick={() => setToggleError(!toggleError)}
                    children={<ErrorIcon />}
                  />
                )}
              </span>
              {errorMsg && (
                <span
                  ref={errorRef}
                  className={`error-box ${toggleError && "show-error"}`}
                >
                  {errorMsg}
                </span>
              )}
            </OriginalComponent>
            {hint && <span className="input-hint">{hint}</span>}
          </div>
        </div>
      );
    })
  );
  WithInput.defaultProps = {
    size: "md",
    animatedBorder: "none",
  };

  WithInput.propTypes = {
    animatedBorder: PropTypes.oneOf(["none", "center", "left", "right"]),
    icon: PropTypes.node,
    leftIcon: PropTypes.bool,
    rightIcon: PropTypes.bool,
  };

  return WithInput;
};

export default withInput;
