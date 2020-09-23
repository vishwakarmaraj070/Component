import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import withActivePage from "./withActivePage";

const Stepper = props => {
  const stepperRef = useRef();

  // props
  const {
    children,
    activePage,
    dotCount,
    vertical,
    id,
    num,
    color,
    className,
    ...attributes
  } = props;
  const [childLength, setChildLength] = useState([]);

  // classes
  useEffect(() => {
    try {
      // getting children count
      if (dotCount) {
        let children = [];
        for (let index = 0; index < dotCount; index++) {
          children.push(index);
        }
        setChildLength(children);
      }
    } catch (error) {
      console.log(error);
    }
  }, [dotCount, props]);

  const stepperStyle = classnames(
    "r-stepper",
    {
      horizental: !vertical,
      vertical,
      [`stepper-${color}`]: color,
      [`stepper-num`]: num
    },
    className
  );

  return (
    <div ref={stepperRef} className={stepperStyle} id={id} {...attributes}>
      {childLength.length > 0 && (
        <div className="dot-container">
          {childLength.map((child, index) =>
            activePage === index ? (
              <span className="dot active-dot" key={index}>
                {num && index + 1}
              </span>
            ) : (
              <span className="dot" key={index}>
                {num && index + 1}
              </span>
            )
          )}
        </div>
      )}
      {/* step */}
      <div className="step-container">{children}</div>
    </div>
  );
};

Stepper.defaultProps = {
  color: "primary"
};

Stepper.propTypes = {
  vertical: PropTypes.bool,
  num: PropTypes.bool
};

export default withActivePage(Stepper);
