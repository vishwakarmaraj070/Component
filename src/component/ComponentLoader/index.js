import React from "react";
import "./Loader.css";

const ComponentLoader = props => {
  return (
    <div style={{ textAlign: "center", display: "block" }}>
      <div className="r-spinner-loader">
        <div className="r-loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

ComponentLoader.propTypes = {};

export default ComponentLoader;
