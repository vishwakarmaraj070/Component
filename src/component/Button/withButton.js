import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Waves from "../Waves";

const withButton = (OriginComponent) => {
  const WithButton = React.memo(
    React.forwardRef((props, ref) => {
      // props distructuring
      const {
        outlined,
        noRipple,
        leftIcon,
        icon,
        rightIcon,
        flat,
        rounded,
        size,
        title,
        color,
        className,
        isLoading,
        children,
        ...attributs
      } = props;
      const [btnElement, setBtnElement] = useState("button");

      // classes
      const btnClasses = classnames(
        "btn2",
        btnElement,
        rounded && `btn-rounded`,
        outlined && `btn-outlined`,
        flat && `btn-flat`,
        {
          isLoading,
          [`btn-${String(color).toLowerCase()}`]: color,
          [`btn-${String(size).toLowerCase()}`]: size,
        },
        !noRipple && "Ripple-parent"
      );

      const [cursorPos, setCursorPos] = useState({});
      const handleClick = (e) => {
        e.stopPropagation();
        let cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now(),
        };
        setCursorPos(cursorPos);
      };

      return (
        <div className={`rbtn btn-2-0-0 ${className}`} data-title={title}>
          <button
            className={btnClasses}
            onMouseUp={handleClick}
            onTouchStart={handleClick}
            ref={ref}
            {...attributs}
          >
            {(leftIcon || icon) && (
              <span style={{ zIndex: "1" }} className="icon-box left">
                {leftIcon || icon}
              </span>
            )}
            <OriginComponent
              children={children}
              setBtnElement={setBtnElement}
            />
            {rightIcon && (
              <span style={{ zIndex: "1" }} className="icon-box right">
                {rightIcon}
              </span>
            )}
            {!noRipple && (
              <Waves
                cursorPos={cursorPos}
                color={color}
                outlined={outlined}
                flat={flat}
              />
            )}

            <div className={`btn-loader-wrapper ${isLoading ? "open" : ""}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                  background: "none",
                  display: "block",
                  shapeRendering: " auto",
                }}
                width="28px"
                height="28px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
              >
                <circle cx="63.1201" cy="50" fill="#44599c" r="23">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.1235955056179776s"
                    keyTimes="0;0.5;1"
                    values="27;73;27"
                    begin="-0.5617977528089888s"
                  ></animate>
                </circle>
                <circle cx="36.88" cy="50" fill="#4db7a0" r="23">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.1235955056179776s"
                    keyTimes="0;0.5;1"
                    values="27;73;27"
                    begin="0s"
                  ></animate>
                </circle>
                <circle cx="63.1201" cy="50" fill="#44599c" r="23">
                  <animate
                    attributeName="cx"
                    repeatCount="indefinite"
                    dur="1.1235955056179776s"
                    keyTimes="0;0.5;1"
                    values="27;73;27"
                    begin="-0.5617977528089888s"
                  ></animate>
                  <animate
                    attributeName="fill-opacity"
                    values="0;0;1;1"
                    calcMode="discrete"
                    keyTimes="0;0.499;0.5;1"
                    dur="1.1235955056179776s"
                    repeatCount="indefinite"
                  ></animate>
                </circle>
              </svg>
            </div>
          </button>
        </div>
      );
    })
  );

  WithButton.defaultProps = {
    color: "primary",
    className: "",
  };

  WithButton.propTypes = {
    color: PropTypes.string,
  };
  return WithButton;
};

export default withButton;
