import React, { useEffect } from "react";
import withButton from "./withButton";

const IconButton = React.memo((props) => {
  const { children, setBtnElement } = props;
  useEffect(() => {
    setBtnElement("icon-btn2");
  }, []);
  return <span style={{ zIndex: "1" }}>{children}</span>;
});

export default withButton(IconButton);
