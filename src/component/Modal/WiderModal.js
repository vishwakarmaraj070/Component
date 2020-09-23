import React, { useEffect } from "react";
import withModal from "./withModal";
import { WiderCard } from "../Card";

const WiderModal = React.memo((props) => {
  const { children, setModalName, ...attributes } = props;
  useEffect(() => {
    setModalName("wider-modal");
  }, []);
  return <WiderCard {...attributes}>{children}</WiderCard>;
});

export default withModal(WiderModal);
