import React from "react";
import { ReactComponent as User } from "../../../Icons/Basic/user.svg";
import { ReactComponent as Plans } from "../../../Icons/Basic/apps.svg";
import { ReactComponent as Logout } from "../../../Icons/Basic/entry.svg";
import { ReactComponent as PasswordIcon } from "../../../Icons/Basic/lock-alt.svg";
import { ReactComponent as SettingIcon } from "../../../Icons/Basic/cog.svg";
import { NavLink } from "react-router-dom";

const NavUserLog = (props) => {
  const { path } = props;

  return (
    <>
      {/* user handle */}
      <div className="nav-icon">
        <SettingIcon />
        <div className="handle-dropdown">
          <NavLink to={`${path}/client`}>
            <SettingIcon />
            Settings
          </NavLink>
        </div>
      </div>
      {/* <div className="nav-icon">
        <NavLink to={`${path}/subscription`}>
          <SuperMarketIcon />
        </NavLink>
      </div> */}
      <div className="nav-profile">
        <span className="divider-log"></span>
        <span className="user-icon">R</span>
        <span className="user-name">{"Raj"}</span>
        <div className="user-handle-dropdown">
          <NavLink to={`${path}/usermanagement`}>
            <User /> User Profile
          </NavLink>
          <NavLink to={`${path}/subscription`}>
            <Plans />
            Discription
          </NavLink>
          <NavLink to={`${path}/changepassword`}>
            <PasswordIcon />
            Change Password
          </NavLink>
          <div>
            <Logout />
            Logout
          </div>
        </div>
      </div>
    </>
  );
};

export default NavUserLog;
