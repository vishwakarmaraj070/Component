import React, { useEffect } from "react";
import withCard from "./withCard";

const Card = React.memo((props) => {
  const { children, setCardName } = props;
  useEffect(() => {
    setCardName("card");
  }, []);
  return <div className="card-content">{children}</div>;
});

export default withCard(Card);
