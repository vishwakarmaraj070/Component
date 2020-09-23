import React from "react";

const SLColumn = (props) => {
  const { index, currentPage, dataPerPage, ...attr } = props;
  return (
    <td {...attr}>{currentPage * dataPerPage - dataPerPage + (index + 1)}</td>
  );
};

SLColumn.defaultProps = {
  currentPage: 1,
  dataPerPage: 5,
  index: 0,
};

export default SLColumn;
