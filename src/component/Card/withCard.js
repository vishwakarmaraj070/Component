import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const withCard = (OriginComponent) => {
  const WithCard = React.memo(
    React.forwardRef((props, ref) => {
      const {
        className,
        tableCard,
        textAlign,
        color,
        children,
        ...attributes
      } = props;
      const [cardName, setCardName] = useState("");
      const cardClasses = classnames("card2", cardName, { tableCard }, [
        `textAlign-${String(textAlign).toLowerCase()}`,
        `card-${color}`,
      ]);
      return (
        <div
          ref={ref}
          className={`rcard card-2-0-0 ${className}`}
          {...attributes}
        >
          <div className={cardClasses}>
            <OriginComponent children={children} setCardName={setCardName} />
          </div>
        </div>
      );
    })
  );

  WithCard.defaultProps = {
    color: "primary",
    textAlign: "left",
    className: "",
  };
  WithCard.propTypes = {
    textAlign: PropTypes.oneOf(["left", "center", "right"]),
  };
  return WithCard;
};

export default withCard;
