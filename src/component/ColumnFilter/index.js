import React, { useState, useEffect, createRef } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import IconButton from "../IconButton";
import { SelectField, Input } from "../Input";
import Button from "../Button";
import { checkOnSubmit } from "../../../Validation";

const ColumnFilter = (props) => {
  const {
    selectorData,
    isLoading,
    className,
    name,
    filterType,
    id,
    type,
    value,
    onClick,
    style,
    rightToLeft,
    ...attributes
  } = props;

  const [handleToggle, setHandleToggle] = useState(false);
  const [firstCondition, setFirstCondition] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const cloumnFilterStyle = classnames("r-cloumn-filter", className, {
    open: handleToggle,
    rightToLeft,
  });

  const [selectedColumnTypeFilter, setSelectedColumnTypeFilter] = useState([]);
  const stringFilter = ["contains", "isEqualTo", "isNotEqualTo"];
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
    let filter = [];
    if (!filterType) {
      switch (type) {
        case "string":
          selectorData.length > 0
            ? stringFilterWithSelector.filter((list, index) => {
                if (index === 0) {
                  setFirstCondition(list);
                }
                filter.push(list);
              })
            : stringFilter.filter((list, index) => {
                if (index === 0) {
                  setFirstCondition(list);
                }
                filter.push(list);
              });
          break;
        case "number":
          numberFilter.filter((list, index) => {
            if (index === 0) {
              setFirstCondition(list);
            }
            filter.push(list);
          });
          break;
        case "date":
          dateFilter.filter((list, index) => {
            if (index === 0) {
              setFirstCondition(list);
            }
            filter.push(list);
          });
          break;
        default:
          break;
      }
    } else {
      filter = filterType;
    }
    setSelectedColumnTypeFilter(filter);
  }, [type, selectorData]);

  const columnInputRef = createRef();
  useEffect(() => {
    if (handleToggle && columnInputRef.current) {
      setTimeout(() => {
        columnInputRef.current.focus();
      }, 400);
    }
  }, [handleToggle, firstCondition]);

  return (
    <div className={cloumnFilterStyle} style={style}>
      <IconButton
        size="sm"
        id={`${name}-filter-btn`}
        flat
        onClick={() => setHandleToggle(!handleToggle)}
      >
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M15.042 1.583H3.958a2.375 2.375 0 0 0-2.375 2.375v.927c0 .326.068.65.198.95v.047c.112.254.27.485.467.68l4.877 4.846v5.217a.792.792 0 0 0 .792.792c.124-.001.246-.03.356-.087l3.167-1.584a.792.792 0 0 0 .435-.704v-3.634l4.845-4.845c.197-.196.355-.427.467-.68v-.048c.142-.298.22-.621.23-.95v-.927a2.375 2.375 0 0 0-2.375-2.375zm-4.52 8.938a.792.792 0 0 0-.23.562v3.468l-1.584.791v-4.259a.792.792 0 0 0-.23-.562L4.284 6.333h10.434l-4.196 4.188zm5.311-5.771H3.167v-.792c0-.437.354-.791.791-.791h11.084c.437 0 .791.354.791.791v.792z" />
        </svg>
      </IconButton>
      <div className="filter-backdrop" onClick={() => setHandleToggle(false)} />
      <form noValidate id="columnfilter-form">
        <ul
          className="column-filter-dropdown"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <li className="select-filter">
            <SelectField
              value={firstCondition}
              id={`${name}-firstCondition`}
              onChange={(e) => setFirstCondition(e.target.value)}
            >
              {selectedColumnTypeFilter.map((list) => (
                <option key={list} value={list}>
                  {list}
                </option>
              ))}
            </SelectField>
          </li>
          <li className="type-value">
            {selectorData.length > 0 ? (
              <SelectField
                id={`${name}-firstCondition-value`}
                {...attributes}
                value={value}
                required
                name={name}
                defaultText={`${name} ${firstCondition}`}
              >
                {selectorData.map((list, index) => {
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
            ) : (
              <React.Fragment>
                <Input
                  id={`${name}-firstCondition-value`}
                  required
                  ref={columnInputRef}
                  type={
                    String(type).toLowerCase() === "string"
                      ? "text"
                      : String(type).toLowerCase()
                  }
                  name={name}
                  autoComplete="off"
                  value={value}
                  {...attributes}
                  placeholder={`${name}  ${
                    firstCondition === "between" ? "From" : firstCondition
                  }`}
                />
                {firstCondition === "between" && (
                  <Input
                    id={`${name}-secondCondition-value`}
                    required
                    type={
                      String(type).toLowerCase() === "string"
                        ? "text"
                        : String(type).toLowerCase()
                    }
                    name={name}
                    autoComplete="off"
                    value={secondValue}
                    onChange={(e) => setSecondValue(e.target.value)}
                    placeholder={`${name} To`}
                  />
                )}
              </React.Fragment>
            )}
          </li>
          <li>
            <Button
              size="sm"
              onClick={(e) => {
                checkOnSubmit(e, "columnfilter-form").then((res) => {
                  onClick && onClick(firstCondition, secondValue);
                  if (value && value.length > 0) {
                    if (firstCondition === "between") {
                      if (secondValue.length > 0) {
                        setTimeout(() => {
                          setHandleToggle(false);
                        }, 500);
                      }
                    } else {
                      setTimeout(() => {
                        setHandleToggle(false);
                      }, 500);
                    }
                  }
                });
              }}
              isLoading={isLoading}
              id={`${name}-search-btn`}
              style={{ margin: "0", width: "140px" }}
            >
              Search
            </Button>
          </li>
        </ul>
      </form>
    </div>
  );
};

ColumnFilter.defaultProps = {
  type: "string",
  name: "column",
  rightToLeft: false,
  isLoading: false,
  selectorData: [],
  filterType: false,
};

ColumnFilter.propTypes = {
  type: PropTypes.string,
};

export default ColumnFilter;
