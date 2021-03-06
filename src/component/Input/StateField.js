import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import SelectField from "./SelectField";
import axios from "axios";

const StateField = props => {
  const { className, stateCode, required, ...attributes } = props;

  const [states, setStates] = useState([]);
  const [selectedValue, setSelectedValue] = useState("-1");

  const stateStyle = classnames("r-state", classnames);

  useEffect(() => {
    try {
      let url;

      if (stateCode) {
        url = `https://eh2yg1n3zh.execute-api.ap-south-1.amazonaws.com/Prod/api/StateMaster/GetByStateCode?StateCode=${stateCode}`;
        axios.get(url).then(res => {
          if (res.status === 200) {
            setStates([res.data]);
            setSelectedValue(String(stateCode));
          } else {
            console.log(res);
          }
        });
      } else {
        // all state
        url =
          "https://eh2yg1n3zh.execute-api.ap-south-1.amazonaws.com/Prod/api/StateMaster/GetAll";
        axios.get(url).then(res => {
          if (res.status === 200) {
            setStates(res.data.stateList);
          } else {
            console.log(res);
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [stateCode]);

  return (
    <Fragment>
      <SelectField
        className={stateStyle}
        defaultValue={selectedValue}
        defaultText="Select State"
        required={required}
        {...attributes}
      >
        {states.length &&
          states.map(state => (
            <option
              key={state.stateCode}
              selected={state.stateCode === selectedValue}
              value={state.stateCode}
            >
              {state.stateName}
            </option>
          ))}
      </SelectField>
    </Fragment>
  );
};

StateField.defaultProps = {
  required: true
};

StateField.propTypes = {
  stateCode: PropTypes.string,
  required: PropTypes.bool
};

export default StateField;
