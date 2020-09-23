import React from "react";
const NoRecordFoundRow = (props) => {
  const { children, ...attr } = props;
  return (
    <tr>
      <td
        style={{
          width: "100%",
          padding: 10,
          color: "gray",
          letterSpacing: 2,
          fontSize: "0.7rem",
          textAlign: "center",
        }}
        {...attr}
      >
        <h3 style={{ textAlign: "center" }}>{children}</h3>
      </td>
    </tr>
  );
};

NoRecordFoundRow.defaultProps = {
  children: "No Records Found",
};

export default NoRecordFoundRow;
