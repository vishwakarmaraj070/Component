import React from "react";
import Notification from "./Notification";

const UpdateNotification = (props) => {
  const { color, children, msg, ...attr } = props;
  return (
    <Notification color="secondary" {...attr}>
      {children ? children : msg}
    </Notification>
  );
};

UpdateNotification.defaultProps = {
  children: "Updated Successfully!",
};

export default UpdateNotification;
