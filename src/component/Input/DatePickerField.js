import React, { useEffect, useState, createRef } from "react";
import DatePicker from "react-datepicker2";
import moment from "moment-jalaali";
import classnames from "classnames";

const DatePickerField = (props) => {
  const {
    placeholder,
    inputClasses,
    onChange,
    className,
    value,
    hint,
    inputFormat,
    size,
    ...attr
  } = props;
  const dateRef = createRef();

  const styles = classnames(
    "r-input-box",
    "search",
    {
      "input-msg": hint,
    },
    className
  );
  const inputStyles = classnames(
    "r-input r-date-picker",
    {
      [`input-${size}`]: size,
    },
    inputClasses
  );

  const handleChange = (value) => {
    if (value) {
      let formateDate = "";
      const d = String(value.date());
      const date = d.length === 1 ? `0${d}` : d;
      const m = String(value.month() + 1);
      const month = m.length === 1 ? `0${m}` : m;
      formateDate = `${date}-${month}-${value.year()}`;
      onChange && onChange(formateDate, value);
    }
  };
  useEffect(() => {
    dateRef.current.input.id = "rDatePickerId";
  }, [dateRef]);

  const [val, setVal] = useState("");
  useEffect(() => {
    if (value) {
      setVal(moment(value, inputFormat));
    } else {
      setVal("");
    }
  }, [value]);

  return (
    <div className={styles}>
      <div className="input-wrapper">
        <DatePicker
          {...attr}
          ref={dateRef}
          inputFormat={inputFormat}
          className={inputStyles}
          placeholder={placeholder}
          timePicker={false}
          value={val}
          tetherAttachment={"bottom center"}
          onChange={(value) => {
            handleChange(value);
          }}
        />
        <div className="calender-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="18"
            fill="#44599c"
            viewBox="0 0 16 18"
          >
            <path
              fillRule="evenodd"
              d="M8 14.4a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0-3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm-4 0a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm5.6-9.6h-.8V.8a.8.8 0 1 0-1.6 0v.8H4.8V.8a.8.8 0 1 0-1.6 0v.8h-.8A2.4 2.4 0 0 0 0 4v11.2a2.4 2.4 0 0 0 2.4 2.4h11.2a2.4 2.4 0 0 0 2.4-2.4V4a2.4 2.4 0 0 0-2.4-2.4zm.8 13.6a.8.8 0 0 1-.8.8H2.4a.8.8 0 0 1-.8-.8V8h12.8v7.2zm0-8.8H1.6V4a.8.8 0 0 1 .8-.8h.8V4a.8.8 0 1 0 1.6 0v-.8h6.4V4a.8.8 0 1 0 1.6 0v-.8h.8a.8.8 0 0 1 .8.8v2.4zM4 11.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6zm0 3.2a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

DatePickerField.defaultProps = {
  placeholder: "dd-mm-yyyy",
  inputFormat: "DD-MM-YYYY",
};

export default DatePickerField;
