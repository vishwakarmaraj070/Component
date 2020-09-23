import React from "react";
import PropTypes from "prop-types";

const CardBody = React.memo((props) => {
  const { className, children, ...attr } = props;
  return (
    <div className={`card-body ${className}`} {...attr}>
      {children}
    </div>
  );
});

CardBody.defaultProps = {
  className: "",
};

export default CardBody;
