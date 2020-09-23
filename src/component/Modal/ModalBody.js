import React from "react";
import { CardBody } from "../Card";

const ModalBody = React.memo((props) => {
  const { children, ...attr } = props;
  return <CardBody {...attr}>{children}</CardBody>;
});

export default ModalBody;
