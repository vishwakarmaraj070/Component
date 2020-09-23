import React, { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
// check mobile funtion
const checkMobile = (value) => {
  if (!isNaN(value)) {
    const pattern = new RegExp(`^[6-9][0-9]{9}$`);
    if (pattern.test(value)) {
      return {
        error: false,
        msg: null,
      };
    } else {
      return {
        error: true,
        msg: `Number start with 6-to-9 and max 10 digit`,
      };
    }
  } else {
    return {
      error: true,
      msg: "Phone number must contain only digits",
    };
  }
};

//
const MobileNumber = (props) => {
  const {
    onKeyUp,
    required,
    placeholder,
    className,
    size,
    ...attributes
  } = props;
  const [error, setError] = useState();

  // validation here
  const handleChange = (e) => {
    onKeyUp && onKeyUp(e);
    const value = e.target.value;
    if (value.length) {
      const check = checkMobile(value);
      setError(check.msg);
    } else {
      setError(null);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
      className={className}
    >
      <Input
        type="tel"
        readOnly
        size={size}
        defaultValue={"+91"}
        style={{ width: "70px" }}
      />
      <Input
        type="tel"
        placeholder={placeholder}
        exact={10}
        error={error}
        style={{ width: "calc(100% - 80px)" }}
        required={required}
        size={size}
        onKeyUp={handleChange}
        {...attributes}
      />
    </div>
  );
};

MobileNumber.defaultProps = {
  placeholder: "Mobile number",
  className: "",
};

MobileNumber.propTypes = {
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

export default MobileNumber;
