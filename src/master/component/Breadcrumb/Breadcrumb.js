import React, { useEffect, useState } from "react";
import "./master-breadcume.css";
// import { ReactComponent as HomeIcon } from "phoenix-component/Icons/Basic/home.svg";
import { NavLink } from "react-router-dom";
// import { DataListField } from "phoenix-component";

const Breadcrumb = (props) => {
  const [steps, setSteps] = useState([]);
  console.log("staps", steps);
  useEffect(() => {
    const href = window.location.href;
    setSteps(href.split("/"));
  }, [window.location.href]);

  const components = ["button", "Input", "Card", "Table", "Modal"];

  return (
    <div className="master-breadcumb">
      <div className="breadcrumb">
        <NavLink
          className="breadcrumb__step"
          activeClassName="breadcrumb__step--active"
          to="/dashboard"
        >
          <span className="before"></span>
          <span className="after" />
        </NavLink>
        {steps &&
          steps.map((step, index) => {
            if (index > 3) {
              return (
                <NavLink
                  key={index}
                  className="breadcrumb__step "
                  activeClassName="breadcrumb__step--active"
                  to="#"
                >
                  <span className="before">{index - 3}</span>
                  {step}
                  <span className="after" />
                </NavLink>
              );
            }
          })}
      </div>
      <div className="search-input">
        {/* <DataListField placeholder="Search..." size="sm">
          {components.map((com, index) => (
            <option key={index} value={com} />
          ))}
        </DataListField> */}
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {};

export default Breadcrumb;
