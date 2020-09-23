import React, { Component } from "react";
import "./css/dashboard-style.css";
import Navbar from "../../component/Navbar";
import SideBar from "./SideBar";
import MainContainer from "./MainContainer";

class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSideBarOpen: true,
    };
  }

  toggleSideBar = () => {
    this.setState({
      ...this.state,
      isSideBarOpen: !this.state.isSideBarOpen,
    });
  };

  render() {
    const path = this.props.match.path;

    return (
      <div id="master-container">
        <Navbar {...this.props} toggleSideBar={this.toggleSideBar} />
        <div
          id="side-bar"
          className={
            !this.state.isSideBarOpen ? "sidebar-close" : "sidebar-open"
          }
        >
          <SideBar path={path} toggleSideBar={this.toggleSideBar} />
        </div>
        <div
          id="main-container"
          className={
            !this.state.isSideBarOpen ? "sidebar-close" : "sidebar-open"
          }
        >
          <MainContainer path={path} />
        </div>
      </div>
    );
  }
}

export default index;
