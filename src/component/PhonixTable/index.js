import React, { useState, useEffect } from "react";

// styles
import "./styles.css";

// components
import BodyRow from "./BodyRow";

const PhonixTable = (props) => {
  // props destructuring
  const {
    columns,
    data,
    onChange,
    onEdit,
    fotterData,
    editIcon,
    deleteIcon,
    onUpdate,
    onDelete,
    onAdd,
    addIcon,
  } = props;

  // state
  const [tableData, setTabelData] = useState(data);

  const [render, setRender] = useState(false);

  console.log("innder ", data);
  // setting state
  const settingState = async () => {
    const data = {};
    columns.map((heading) => {
      // data.push({ [heading.title]: "" });
      Object.entries(heading).map(([key, value]) => {
        data[value] = "";
      });
    });
    setTabelData([...tableData, data]);
  };

  // update tabelData
  const updateData = (e, index, key) => {
    onUpdate(e, index, key);
  };

  // delete row
  const deleteRow = (index) => {
    onDelete(index);
  };

  return (
    <table className={`Phonix_table`}>
      <thead className={`Phonix_table_head Small-Body-CopySmall-body-Primary`}>
        <tr>
          {[...columns].map((heading, index) => {
            return (
              <th
                className={`Phonix_table_th`}
                key={index}
                style={{ minWidth: `${heading.charCount * 10}px` }}
              >
                {heading.title}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((data, index) => {
          return (
            <BodyRow
              columns={columns}
              editIcon={editIcon}
              deleteIcon={deleteIcon}
              data={data}
              index={index}
              updateData={updateData}
              deleteRow={deleteRow}
              onEdit={onEdit}
            />
          );
        })}
        {onAdd ? <div onClick={onAdd}>{addIcon ? addIcon : "+"}</div> : null}
      </tbody>
      <tfoot className={`Phonix_table_fotter`}>
        <tr style={{ color: "transparent" }}>asd</tr>
        <tr style={{ color: "transparent" }}>asd</tr>
        <tr>
          {fotterData.map((fotterData, index) => {
            return (
              <td className={`Phonix_table_td`} key={index}>
                <input readOnly value={fotterData} align={`right`} />
              </td>
            );
          })}
        </tr>
      </tfoot>
    </table>
  );
};

PhonixTable.defaultProps = {
  columns: [{ title: "name" }, { title: "lastName" }, { title: "age" }],
  fotterData: [20, 30, 40, 500, 90, 30],
};

export default PhonixTable;
