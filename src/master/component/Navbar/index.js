import React, { Component } from "react";
import "./navbar-style.css";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavUserLog from "./NavUserLog";

class index extends Component {
  path = this.props.match.path;

  render() {
    return (
      <div id="r-navbar-container">
        <div className="nav-logo">
          <NavLogo path={this.path} toggleSideBar={this.props.toggleSideBar} />
        </div>
        <div className="nav-menu">
          <NavMenu path={this.path} />
        </div>
        <div className="nav-user-log">
          <NavUserLog path={this.path} />
        </div>
      </div>
    );
  }
}

export default index;
