import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const DateField = (props) => {
  // props
  const { size, value, onChange, required, ...attributes } = props;

  const [formatDate, setFormatDate] = useState(null);

  // function here
  const formateValue = (value) => {
    let val = "";
    if (value) {
      const dateArray = String(value).split("-");
      if (dateArray.length === 3) {
        if (dateArray[0].length === 4) {
          val = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
        } else {
          val = `${dateArray[0]}-${dateArray[1]}-${dateArray[2]}`;
        }
      }
    } else {
      val = "";
    }
    setFormatDate(val);
    return val;
  };
  const handleChange = (e) => {
    const val = formateValue(e.target.value);
    onChange && onChange(e, val);
  };

  useEffect(() => {
    formateValue(value);
  }, [value]);

  return (
    <div className="date-input-wrapper">
      <Input
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            viewBox="0 0 16 18"
          >
            <path
              fill-rule="evenodd"
              d="M8 14.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0-3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm-4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm5.6-9.6h-.8V.8a.8.8 0 1 0-1.6 0v.8H4.8V.8a.8.8 0 1 0-1.6 0v.8h-.8A2.4 2.4 0 0 0 0 4v11.2a2.4 2.4 0 0 0 2.4 2.4h11.2a2.4 2.4 0 0 0 2.4-2.4V4a2.4 2.4 0 0 0-2.4-2.4zm.8 13.6a.8.8 0 0 1-.8.8H2.4a.8.8 0 0 1-.8-.8V8h12.8v7.2zm0-8.8H1.6V4a.8.8 0 0 1 .8-.8h.8V4a.8.8 0 1 0 1.6 0v-.8h6.4V4a.8.8 0 1 0 1.6 0v-.8h.8a.8.8 0 0 1 .8.8v2.4zM4 11.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0 3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z"
            />
          </svg>
        }
        type="date"
        onChange={handleChange}
        required={required}
        size={size}
        {...attributes}
      />
      <div className="date-input">
        <Input
          autoFocus
          value={formatDate}
          placeHolder="dd-mm-yyyy"
          size={size}
        />
      </div>
    </div>
  );
};

DateField.propTypes = {
  onKeyUp: PropTypes.func,
  required: PropTypes.bool,
};

export default DateField;
