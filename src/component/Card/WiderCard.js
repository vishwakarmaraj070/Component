import React, { useEffect } from "react";
import withCard from "./withCard";

const WiderCard = React.memo((props) => {
  const { children, setCardName } = props;
  useEffect(() => {
    setCardName("wider-card");
  }, []);
  return <div className="card-content">{children}</div>;
});

export default withCard(WiderCard);
