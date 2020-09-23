import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import classnames from "classnames";
import IconButton from "../Button/IconButton";

const InputIcon = (props) => {
  // props
  const { onClick, icon, className, error, ...attributes } = props;

  // function here
  const handleClick = (e) => {
    onClick && onClick();
  };

  // classes here
  const searchStyles = classnames("search", className);
  return (
    <div className={searchStyles}>
      <Input {...attributes} error={error} />
      {!error && (
        <IconButton
          flat
          onClick={handleClick}
          size="sm"
          style={{ width: "25px", height: "25px" }}
        >
          {icon && icon}
        </IconButton>
      )}
    </div>
  );
};

InputIcon.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

export default InputIcon;
