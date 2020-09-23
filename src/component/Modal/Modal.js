import React, { useEffect } from "react";
import withModal from "./withModal";
import { Card } from "../Card";

const Modal = React.memo((props) => {
  const { children, setModalName, ...attributes } = props;
  useEffect(() => {
    setModalName("modal2");
  }, []);
  return <Card {...attributes}>{children}</Card>;
});

export default withModal(Modal);
