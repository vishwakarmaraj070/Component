import React, { useEffect } from "react";
import withButton from "./withButton";

const Button = React.memo((props) => {
  const { children, setBtnElement } = props;
  useEffect(() => {
    setBtnElement("button2");
  }, []);
  return <span style={{ zIndex: "1" }}>{children}</span>;
});

export default withButton(Button);
