import React from "react";
import Notification from "./Notification";

const DeleteNotification = (props) => {
  const { color, msg, ...attr } = props;
  return (
    <Notification audioType="faild" color="danger" {...attr}>
      {msg}
    </Notification>
  );
};

DeleteNotification.defaultProps = {
  msg: "Deleted Successfully!",
};

export default DeleteNotification;
