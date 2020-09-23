import React from "react";
import PropTypes from "prop-types";
import Cards from "./Cards";
import MoreCards from "./MoreCards";

const index = (props) => {
  return (
    <div className="page-container">
      <Cards />
      {/*  */}
      <MoreCards />
    </div>
  );
};

index.propTypes = {};

export default index;
