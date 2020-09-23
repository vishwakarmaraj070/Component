import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import Waves from "../Waves";
import ActionLoader from "./actionLoading.svg";

const Badge = (props) => {
  const [cursorPos, setCursorPos] = useState({});

  // distrucure badge
  const {
    children,
    onMouseUp,
    onClick,
    className,
    contentEditable,
    onTouchStart,
    isLoading,
    disabled,
    color,
    ...attributes
  } = props;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onMouseUp && onMouseUp(e);
    onTouchStart && onTouchStart(e);
    let cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now(),
    };
    setCursorPos(cursorPos);
  };

  // clasess
  const badgeStyle = classnames(
    "badge",
    "Ripple-parent",
    {
      [`badge-${color}`]: color,
      contentEditable,
      disabled,
      onClick,
      isLoading,
    },
    className
  );

  return (
    <div
      className={badgeStyle}
      onMouseUp={handleClick}
      contentEditable={contentEditable}
      onTouchStart={handleClick}
      onClick={onClick}
      onChange={(e) => console.log(e.target.value)}
      suppressContentEditableWarning={true}
      {...attributes}
    >
      {children}
      {!contentEditable && <Waves cursorPos={cursorPos} color={color} />}
      {isLoading && (
        <div className={`is-loading-container`}>
          <ActionLoader />
        </div>
      )}
    </div>
  );
};

Badge.defaultProps = {
  color: "primary",
};

Badge.propTypes = {
  onMouseUp: PropTypes.func,
  onTouchStart: PropTypes.func,
  color: PropTypes.string,
  contentEditable: PropTypes.bool,
};

export default Badge;
