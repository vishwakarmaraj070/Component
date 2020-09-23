import React, { useEffect } from "react";
import withModal from "./withModal";
import { NarrowCard } from "../Card";

const NarrowModal = React.memo((props) => {
  const { children, setModalName, ...attributes } = props;
  useEffect(() => {
    setModalName("narrow-modal");
  }, []);
  return <NarrowCard {...attributes}>{children}</NarrowCard>;
});

export default withModal(NarrowModal);
