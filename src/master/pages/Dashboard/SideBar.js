import React, { useState } from "react";
import LogoImg from "../../../images/Saral.png";
import { NavLink } from "react-router-dom";
// import { DataListField } from "phoenix-component";
import { ReactComponent as BarIcon } from "../../../Icons/Basic/bars.svg";
import { IconButton, Button } from "../../../component/Button";

const SideBar = (props) => {
  const { toggleSideBar, path } = props;
  const components = [
    "button",
    "Input",
    "Card",
    "Table",
    "Modal",
    "Notification",
    "testingpage",
  ];
  return (
    <div className="side-bar-container">
      <div className="logo-container">
        <img src={LogoImg} alt="logo" />
        <div className="close-door">
          <BarIcon onClick={toggleSideBar} />
        </div>
        <div className="search-container">
          {/* <DataListField placeholder="Component search" size="sm">
            {components.map((com, index) => (
              <option key={index} value={com} />
            ))}
          </DataListField> */}
        </div>
      </div>
      <div className="entity-container">
        {components.map((com, index) => (
          <div className="entity-box" key={index}>
            <NavLink
              to={`${path}/${String(com).toLowerCase()}`}
              activeClassName="entity-active"
            >
              <Button>{`${com}`}</Button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
