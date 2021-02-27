import React from "react";
import Notification from "./Notification";

const WarningNotification = (props) => {
  const { color, children, msg, ...attr } = props;
  return (
    <Notification audioType={"warning"} color="close" {...attr}>
      {children ? children : msg}
    </Notification>
  );
};

WarningNotification.defaultProps = {
  children: "Warning msg you can send in msg props ",
};

export default WarningNotification;
