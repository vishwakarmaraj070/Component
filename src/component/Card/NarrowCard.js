import React, { useEffect } from "react";
import withCard from "./withCard";

const NarrowCard = React.memo((props) => {
  const { children, setCardName } = props;
  useEffect(() => {
    setCardName("narrow-card");
  }, []);
  return <div className="card-content">{children}</div>;
});

export default withCard(NarrowCard);
