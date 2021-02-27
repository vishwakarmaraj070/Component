import React from "react";
import Notification from "./Notification";

const SaveNotification = (props) => {
  const { color, children, msg, ...attr } = props;
  return <Notification audioType={'success'} {...attr}>{children ? children : msg}</Notification>;
};

SaveNotification.defaultProps = {
  children: "Saved Successfully!",
};

export default SaveNotification;
