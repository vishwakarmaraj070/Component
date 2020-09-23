import React, { useState, useMemo, useEffect } from "react";

// import { ReactComponent as Edit } from "../../assets/Icons/Basic/pen.svg";
// import { ReactComponent as Delete } from "../../assets/Icons/Basic/trash.svg";

const BodyRow = props => {
  //   props destructuring
  const {
    data,
    index,
    updateData,
    deleteRow,
    onEdit,
    editIcon,
    deleteIcon,
    columns
  } = props;

  // row edit state
  const [edit, setEdit] = useState(true);

  const tableData = useMemo(() => {
    return data;
  });

  return (
    <tr key={index}>
      {Object.entries(tableData).map(([key, value], i) => {
        if (columns[i].lookUp) {
          return (
            <td className={`Phonix_table_td `}>
              <select
                className={`Phonix_table_select`}
                name={columns[i].lookUp.name}
                // disabled={edit}
                value={value}
                onChange={e => updateData(e, index, key)}
              >
                {columns[i].lookUp.map((options, index) => {
                  return (
                    <option key={index} value={options.value}>
                      {options.name}
                    </option>
                  );
                })}
              </select>
            </td>
          );
        } else {
          return (
            <td className={`Phonix_table_td `}>
              <input
                className={`${!edit ? "Phonix_table_edit_effect" : ""}`}
                id={index + 1}
                name={columns[i].field}
                key={index}
                type={columns[i].type ? columns[i].type : "text"}
                // placeholder={key}
                onChange={e => updateData(e, index, key)}
                value={value}
                align={`right`}
              />
            </td>
          );
        }
      })}
      {columns[columns.length - 1].field === "action" && (
        <td
          className={`Phonix_table_td`}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: 10
          }}
        >
          {edit ? (
            <div
              style={{
                width: 50,
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              {onEdit ? (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => onEdit(index)}
                >
                  {editIcon}
                </div>
              ) : null}
              {deleteIcon ? (
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteRow(index)}
                >
                  {deleteIcon}
                </div>
              ) : (
                <div style={{ cursor: "pointer" }}>D</div>
              )}
            </div>
          ) : (
            <div>
              <span
                style={{ color: "orange", cursor: "pointer" }}
                onClick={() => setEdit(true)}
              >
                X
              </span>
            </div>
          )}
        </td>
      )}
    </tr>
  );
};

export default BodyRow;
