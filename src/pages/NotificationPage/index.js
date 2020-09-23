import React, { useState } from "react";

import Notifications from "./Notifications";
import NotificationPosition from "./NotificationPosition";

const index = (props) => {
  return (
    <div className="page-container">
      <Notifications />
      {/*  */}
      <NotificationPosition />
    </div>
  );
};

index.propTypes = {};

export default index;
