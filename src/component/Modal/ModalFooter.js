import React from "react";
import { CardFooter } from "../Card";

const ModalFooter = React.memo((props) => {
  const { children, ...attr } = props;
  return <CardFooter {...attr}>{children}</CardFooter>;
});

export default ModalFooter;
