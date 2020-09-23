import React from "react";
import { NavLink } from "react-router-dom";

const NavMenu = (props) => {
  return (
    <>
      <p>
        Link to Install :
        https://npmphoenix.s3.ap-south-1.amazonaws.com/saral-component-2.0.0.tgz
      </p>
      {/* <NavLink activeClassName="r-nav-active" to="/dashboard/gst">
        GST
      </NavLink> */}
      {/* <NavLink activeClassName="r-nav-active" to="/dashboard/anx1">
        <span>ANX1</span>
      </NavLink>
      <NavLink activeClassName="r-nav-active" to="/dashboard/anx2">
        <span>Anx2</span>
      </NavLink>
      <NavLink activeClassName="r-nav-active" to="/dashboard/json">
        <span>Json</span>
      </NavLink> */}
    </>
  );
};

NavMenu.propTypes = {};

export default NavMenu;
