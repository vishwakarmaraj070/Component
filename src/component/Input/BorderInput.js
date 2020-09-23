import React, { useEffect } from "react";
import PropTypes from "prop-types";
import withInput from "./withInput";

const BorderInput = React.memo((props) => {
  const { setInputTypeClass, children } = props;
  useEffect(() => {
    setInputTypeClass("border-input");
  }, []);
  return (
    <div className="input-box">
      {children}
      <span className="border" />
    </div>
  );
});

BorderInput.defaultProps = {};

export default withInput(BorderInput);
