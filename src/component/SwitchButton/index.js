import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SwitchButton = (props) => {
  const { className, color, id, onChange, ...attributes } = props;
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    onChange && onChange(e);
    setIsChecked(e.target.checked);
  };

  const switchStyle = classnames(
    `r-switch-btn switch-btn-${color}`,
    { checked: isChecked },
    className
  );
  return (
    <label htmlFor={id} className={switchStyle} {...attributes}>
      <input type="checkbox" id={id} onChange={handleChange} />
      <span className="before" />
      <span className="after" />
    </label>
  );
};

SwitchButton.defaultProps = {
  color: "primary",
  id: "swtbtn1",
};

SwitchButton.propTypes = {
  color: PropTypes.string,
};

export default SwitchButton;
