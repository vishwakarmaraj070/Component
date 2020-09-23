import React from "react";

const CardFooter = React.memo((props) => {
  const { left, className, right, children, ...attr } = props;
  return (
    <div
      className={`card-footer ${className} ${left ? "left" : ""} ${
        right ? "right" : ""
      }`}
      {...attr}
    >
      {children}
    </div>
  );
});

CardFooter.defaultProps = {
  right: true,
  className: "",
};

export default CardFooter;
