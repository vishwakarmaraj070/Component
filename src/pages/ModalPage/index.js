import React from "react";
import Modals from "./Modals";
import ModalPosition from "./ModalPosition";
import MoreModal from "./MoreModals";
const index = (props) => {
  return (
    <div className="page-container">
      <Modals />
      {/*  */}
      <ModalPosition />
      {/*  */}
      <MoreModal />
    </div>
  );
};

index.propTypes = {};

export default index;
