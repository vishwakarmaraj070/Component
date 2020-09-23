import React, { useState, useEffect } from "react";
import CloseIcon from "./multiply.svg";
import DownIcon from "./angle-down.svg";
import FilterICon from "./filter.svg";
import classnames from "classnames";
import { Input, DatePickerField, SelectField } from "../Input";
import SwitchButton from "../SwitchButton";
import IconButton from "../IconButton";
import Badge from "../Badge";

const FilterNav = (props) => {
  const {
    filterBy,
    className,
    onChange,
    onClick,
    isLoading,
    ...attributes
  } = props;

  const [filterRow, setFilterRow] = useState([]);
  const [state, setState] = useState({});
  const [filterIn, setFilterIn] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [Dummi, setDummi] = useState(false);
  const [isFilterHave, setFilterHave] = useState(false);

  //classes
  const filterNavStyle = classnames("r-filter-nav", className, {
    "no-filter": !isFilterHave,
  });
  const stringFilter = ["isEqualTo", "isNotEqualTo", "contains"];
  const stringFilterWithSelector = ["isEqualTo", "isNotEqualTo"];
  const dateFilter = ["is", "greaterthan", "lesserthan", "between"];
  const numberFilter = [
    "isEqualTo",
    "isNotEqualTo",
    "greaterthan",
    "lesserthan",
    "between",
  ];

  useEffect(() => {
    if (filterIn.length > 0) {
      setFilterHave(true);
    } else {
      setFilterHave(false);
    }
  }, [filterIn]);

  const getColumnShould = (val, selectorData) => {
    if (selectorData.length <= 0) {
      switch (String(val).toLocaleLowerCase()) {
        case "string":
          return stringFilter;
        case "date":
          return dateFilter;
        case "number":
          return numberFilter;
        default:
          return stringFilter;
      }
    } else {
      return stringFilterWithSelector;
    }
  };

  const onChangeReturn = (index) => {
    if (filterIn[index] !== undefined) {
      if (filterIn[index].columnName !== "-1") {
        onChange && onChange(filterIn);
      }
    } else {
      onChange && onChange(filterIn);
    }
  };

  const handleColumns = (e, index) => {
    const { value } = e.target;
    filterIn.length > 0 &&
      (function () {
        filterRow.length > 0 &&
          filterRow.filter((list) => {
            if (
              String(list.columnName).toLocaleLowerCase() ===
              value.toLocaleLowerCase()
            ) {
              let dummiFilterIn = filterIn;
              dummiFilterIn.splice(index, 1, list);
              setFilterIn(dummiFilterIn);
              let dumm = selectedColumns;
              dumm.splice(index, 1, value);
              setSelectedColumns(dumm);
              onChangeReturn(index);
              setDummi(!Dummi);
            }
          });
      })();
  };

  const handleNewFilter = (index) => {
    let dummiFilterIn = filterIn;
    dummiFilterIn.splice(index + 1, 0, {
      columnName: "-1",
      columnShould: "",
      operator: "-1",
      selectorData: [],
      type: "",
      and_or: "and",
      value: "",
    });
    setFilterIn(dummiFilterIn);
    let dumm = selectedColumns;
    dumm.splice(index + 1, 0, "");
    setSelectedColumns(dumm);
    setDummi(!Dummi);
  };

  const handleAndOR = (e, index) => {
    const { checked } = e.target;
    let dummiFilterIn = filterIn;
    dummiFilterIn[index - 1].and_or = checked === true ? "or" : "and";
    setFilterIn(dummiFilterIn);
    onChangeReturn(index);
    setDummi(!Dummi);
  };
  const handleOnChanges = (
    e,
    index,
    between = false,
    date = false,
    nm = ""
  ) => {
    let dummiFilterIn = filterIn;
    if (!date) {
      const { value, name } = e.target;
      setState({
        ...state,
        [name]: value,
      });
      if (filterIn[index].columnName !== "-1") {
        if (!between) {
          dummiFilterIn[index].value = value;
        } else {
          dummiFilterIn[index].value = {
            ...dummiFilterIn[index].value,
            [name]: value,
          };
        }
      }
    } else {
      setState({
        ...state,
        [nm]: date,
      });

      if (filterIn[index].columnName !== "-1") {
        if (!between) {
          dummiFilterIn[index].value = date;
        } else {
          dummiFilterIn[index].value = {
            ...dummiFilterIn[index].value,
            [nm]: date,
          };
        }
      }
    }

    setFilterIn(dummiFilterIn);
    onChangeReturn(index);
    setDummi(!Dummi);
  };

  const hadleCloseFilter = (index, name = "") => {
    let dummiFilterIn = filterIn;
    setState({
      ...state,
      [dummiFilterIn[index].columnName]: "",
    });
    dummiFilterIn.splice(index, 1);
    setFilterIn(dummiFilterIn);
    onChangeReturn(index);
    if (name.length > 0) {
      let dumm = selectedColumns;
      dumm.splice(index, 1);
      setSelectedColumns(dumm);
    }
    setDummi(!Dummi);
  };

  const handleOperator = (e, index) => {
    const { value } = e.target;
    filterIn.length > 0 &&
      (function () {
        let dummiFilterIn = filterIn;
        dummiFilterIn[index].operator = value;
        setFilterIn(dummiFilterIn);
        onChangeReturn(index);
        setDummi(!Dummi);
      })();
  };

  const handleAddfilter = () => {
    let dummiFilterIn = [];
    dummiFilterIn.push({
      columnName: "-1",
      columnShould: "",
      operator: "-1",
      selectorData: [],
      type: "",
      and_or: "and",
      value: "",
    });
    setFilterIn(dummiFilterIn);
    let dumm = [];
    dumm.push("");
    setSelectedColumns(dumm);
  };

  useEffect(() => {
    if (filterBy.length > 0) {
      let dummiFilterRow = [];
      filterBy.map((filter) => {
        let clmshd = getColumnShould(filter.type, filter.selectorData);
        dummiFilterRow.push({
          columnName: filter.value,
          selectorData: filter.selectorData,
          columnShould: clmshd,
          operator: clmshd[0],
          type: String(filter.type).toLocaleLowerCase(),
          and_or: "and",
          value: "",
        });
      });
      setFilterRow(dummiFilterRow);
    }
  }, [filterBy]);

  const getInput = (filter, index, name, between) => {
    return (
      <React.Fragment>
        {filter.type !== "date" ? (
          <Input
            placeholder="Type here"
            name={name}
            value={state[name] !== undefined ? state[name] : ""}
            id={name}
            type={filter.type === "number" ? "number" : "text"}
            onChange={(e) => handleOnChanges(e, index, between)}
          />
        ) : (
          <DatePickerField
            value={state[name] !== undefined ? state[name] : ""}
            onChange={(value, e) =>
              handleOnChanges(e, index, between, value, name)
            }
          />
        )}
      </React.Fragment>
    );
  };

  return (
    <div className={filterNavStyle} {...attributes}>
      <div className="filter-row-box filter-row">
        <table style={{ width: "100%" }}>
          <tbody>
            {filterIn.length > 0 ? (
              filterIn.map((filter, index) => (
                <tr key={index}>
                  <td>
                    {index !== 0 && (
                      <div className="and-or">
                        <span>
                          And{" "}
                          <SwitchButton
                            id={`and-or-${index}`}
                            onChange={(e) => handleAndOR(e, index)}
                          />{" "}
                          Or
                        </span>
                      </div>
                    )}
                  </td>
                  <td>
                    <SelectField
                      defaultText="Select Column"
                      name={`${filter.columnName}-column`}
                      id={`${filter.columnName}-column`}
                      value={filter.columnName}
                      onChange={(e) => handleColumns(e, index)}
                    >
                      {filterBy.length > 0 &&
                        filterBy.map((list, index) => (
                          <option
                            key={index}
                            value={list.value}
                            disabled={selectedColumns.includes(list.value)}
                            style={{ textTransform: "capitalize" }}
                          >
                            {list.name}
                          </option>
                        ))}
                    </SelectField>
                  </td>
                  <td>
                    <SelectField
                      defaultText="Select Operator"
                      name={`${filter.columnName}_operator`}
                      id={`${filter.columnName}_operator`}
                      value={filter.operator}
                      onChange={(e) => handleOperator(e, index)}
                    >
                      {filter.columnShould.length > 0 &&
                        filter.columnShould.map((list, index) => (
                          <option
                            key={index}
                            value={list}
                            style={{ textTransform: "capitalize" }}
                          >
                            {list}
                          </option>
                        ))}
                    </SelectField>
                  </td>
                  <td>
                    <div style={{ display: "inline-flex" }}>
                      {filter.selectorData &&
                      filter.selectorData.length <= 0 ? (
                        filter.operator !== "between" ? (
                          getInput(filter, index, `${filter.columnName}`, false)
                        ) : (
                          <div className="filter-between">
                            <div>
                              <span style={{ marginLeft: "0", width: "40px" }}>
                                From
                              </span>
                              {getInput(filter, index, "from", true)}
                            </div>
                            <div>
                              <span style={{ marginLeft: "0", width: "40px" }}>
                                To
                              </span>
                              {getInput(filter, index, "to", true)}
                            </div>
                          </div>
                        )
                      ) : (
                        <SelectField
                          defaultText="Select here"
                          value={
                            state[filter.columnName]
                              ? state[filter.columnName]
                              : "-1"
                          }
                          name={`${filter.columnName}`}
                          id={`${filter.columnName}`}
                          onChange={(e) => {
                            handleOnChanges(e, index);
                          }}
                        >
                          {filter.selectorData.map((list, index) => {
                            if (typeof list === "object") {
                              return (
                                <option key={index} value={list.key}>
                                  {list.value}
                                </option>
                              );
                            } else {
                              return (
                                <option key={index} value={index + 1}>
                                  {list}
                                </option>
                              );
                            }
                          })}
                        </SelectField>
                      )}
                      <span className="action-box">
                        <IconButton
                          size="sm"
                          flat
                          color="danger"
                          id={`${filter.columnName}-close`}
                          style={{ fontSize: "12px", fill: "#eb4747" }}
                          onClick={() =>
                            hadleCloseFilter(index, filter.columnName)
                          }
                        >
                          <CloseIcon />
                        </IconButton>
                        <IconButton
                          size="sm"
                          id={`${filter.columnName}-add`}
                          flat
                          color="seconadary"
                          onClick={() => handleNewFilter(index)}
                        >
                          +
                        </IconButton>
                      </span>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr onClick={handleAddfilter} style={{ cursor: "pointer" }}>
                <td>
                  <IconButton style={{ width: "60px" }} id={"filter-icon"}>
                    <FilterICon fill="#fff" /> <DownIcon fill="#fff" />
                  </IconButton>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {filterIn.length > 0 && (
        <div className="clear-filter" style={{ width: "120px" }}>
          <Badge
            color="danger"
            id={"clear-filter"}
            onClick={() => {
              setFilterIn([]);
              setSelectedColumns([]);
              setState({});
              onChange && onChange([]);
            }}
          >
            Clear <CloseIcon fill="#eb4747" />
          </Badge>
          <Badge
            id={"apply-filter"}
            onClick={(e) => onClick && onClick(e)}
            isLoading={isLoading}
          >
            Apply Filter
          </Badge>
        </div>
      )}
    </div>
  );
};

FilterNav.defaultProps = {
  filterBy: [
    { name: "String", value: "string", type: "string" },
    { name: "Date", value: "date", type: "date" },
    { name: "Number", value: "number", type: "number" },
  ],
  isLoading: false,
  selectorData: [],
};

export default FilterNav;
