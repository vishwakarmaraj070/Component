import React from "react";
import Notification from "./Notification";

const DeleteNotification = (props) => {
  const { color, msg, ...attr } = props;
  return (
    <Notification color="danger" {...attr}>
      {msg}
    </Notification>
  );
};

DeleteNotification.defaultProps = {
  msg: "Deleted Succussfully!",
};

export default DeleteNotification;
