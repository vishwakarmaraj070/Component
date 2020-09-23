import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";

// styles
import classnames from "classnames";

// components
import Checkbox from "../Checkbox";
import Radiobox from "../Radio";

const listRef = createRef();
class Select extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false,
      radioSeleted: { name: "", value: "" },
      width: "0px",
      dropdownSearch: "",
      selectall: false,
      multiSelect: {},
    };
  }

  componentDidMount() {
    this.setState({
      width: listRef.current.clientWidth,
    });
    const defaultSelected = this.props.list.filter(
      (list) => list.value == this.props.defaultValue
    );
    if (defaultSelected.length > 0) {
      this.setState({ ...this.state, radioSeleted: defaultSelected[0] });
    }
    document.addEventListener("mousedown", this.handleClose, false);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.defaultValue !== this.props.defaultValue) {
      // if (this.props.defaultProps == null || this.props.defaultProps == 0) {
      //   this.setState({ ...this.state, radioSeleted: { name: "", value: 0 } });
      //   //return false;
      // } else {
      const defaultSelected = this.props.list.filter(
        (list) => list.value == this.props.defaultValue
      );

      console.log("selected current", defaultSelected);
      if (defaultSelected.length > 0) {
        this.setState({ ...this.state, radioSeleted: defaultSelected[0] });
        //}
      } else {
        this.setState({ ...this.state, radioSeleted: { name: "", value: 0 } });
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClose, false);
  }

  // // returning current selected value
  // componentDidUpdate() {
  //   const state =
  //     this.props.multiselect === true
  //       ? this.state.multiSelect
  //       : this.state.radioSeleted;
  // }

  showDropdownMenu = () => {
    this.setState(
      {
        displayMenu: !this.state.displayMenu,
      },
      () => {}
    );
  };

  // drop down animation handler
  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {});
  };

  handleClose = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.hideDropdownMenu();
  };

  onSearch = (event) => {
    const { value } = event.target;

    this.setState({
      dropdownSearch: value,
    });
  };

  // select all checkbox
  handleSelectAll = () => {
    const AllSelected = {};
    const Search = this.props.list.filter((item) => {
      console.log(item);
      return item.name.toLowerCase().includes(this.state.dropdownSearch);
    });
    console.log(Search);
    Search.map(
      (item) =>
        (AllSelected[item.name] =
          this.state.multiSelect[item.name] === item.value ? "" : item.value)
    );
    this.setState(
      {
        selectall: !this.state.selectall,
        multiSelect: { ...AllSelected },
      },
      () => console.log("state", this.state)
    );
  };

  // checkbox
  handleCheckBox = (name, value) => {
    console.log(name, value);
    this.setState(
      {
        multiSelect: {
          ...this.state.multiSelect,
          [name]: this.state.multiSelect[name] === value ? "" : value,
        },
      },
      () => {
        console.log(this.state.multiSelect);
      }
    );
  };

  // radio
  handleRadio = (name, value) => {
    this.setState(
      {
        radioSeleted: { name: name, value: value },
      },
      () => this.onSetSelect()
    );
  };

  onSetSelect = () => {
    this.props.onSelect(this.props.name, this.state.radioSeleted);
    this.hideDropdownMenu();
  };

  render() {
    // state destructuring
    const {
      liAnimation,
      radioSeleted,
      displayMenu,
      width,
      dropdownSearch,
    } = this.state;

    // props destructuring
    const { title, list, multiselect, color } = this.props;

    //animation class
    const animationClass = liAnimation ? "lianimation" : "";

    return (
      <div className={`select h-100`} ref={(node) => (this.node = node)}>
        <div
          id={this.props.id}
          className={`select_button-${color} Small-Body-CopySmall-body-Copy-Bold-${
            color === "light" ? "Default" : "White"
          } h-100 ${
            multiselect ? "p-1 " : ""
          } flex justify-between align-items-center`}
          onClick={this.showDropdownMenu}
        >
          <span>
            {multiselect
              ? title
              : radioSeleted.name === ""
              ? title
              : radioSeleted.name}
          </span>
          <span className={`select_arrow`}>&#10095;</span>
        </div>
        <ul
          ref={listRef}
          className={`select_list-${color === "light" ? "primary" : color} ${
            displayMenu ? "select_animation" : ""
          }`}
          style={{ "--height": "200px" }}
        >
          <li
            className={`select_search_container ${
              !displayMenu ? "select_search_animation" : ""
            }`}
          >
            <div>
              <input
                placeholder="Search"
                onChange={this.onSearch}
                className={`select_search`}
                style={{ width: "100%" }}
              />
              <span className={`select_search_icon`}>&#128269;</span>
            </div>
          </li>
          {multiselect && (
            <li
              className={`select_option-${color} ${animationClass}`}
              style={{ height: 35 }}
            >
              <div className={`flex w-100 justify-between align-items-center`}>
                <span
                  className={`Small-Body-Copy-RegularSmall-body-copy-Regular-Default`}
                >
                  Select All
                </span>
                <Checkbox
                  labelLeft
                  name={"selectall"}
                  onChange={this.handleSelectAll}
                  id={"selectall"}
                  color={color === "light" ? "primary" : color}
                  checked={this.state.selectall}
                  style={{ marginRight: -10 }}
                />
              </div>
            </li>
          )}
          {list
            .filter((item) => {
              return item.name.toLowerCase().includes(dropdownSearch);
            })
            .map((item, index) => {
              return (
                <li
                  key={index}
                  className={`select_option-${color} ${animationClass}`}
                  value={item.value}
                  style={{ padding: "3px 5px 3px 3px" }}
                >
                  {multiselect ? (
                    <div
                      className={`flex w-100 justify-between align-items-center`}
                      onClick={() => this.handleCheckBox(item.name, item.value)}
                    >
                      <span
                        className={`Small-Body-Copy-RegularSmall-body-copy-Regular-Default`}
                      >
                        {item.name}
                      </span>
                      <Checkbox
                        labelLeft
                        name={item.name}
                        value={item.value}
                        id={`selectcontent-${index}`}
                        color={color === "light" ? "primary" : color}
                        checked={
                          this.state.multiSelect[item.name] === item.value
                            ? true
                            : false
                        }
                        onClick={() =>
                          this.handleCheckBox(item.name, item.value)
                        }
                        style={{ marginRight: -10 }}
                      />
                    </div>
                  ) : (
                    <div
                      className={`flex w-100 justify-between align-items-center`}
                      onClick={() => this.handleRadio(item.name, item.value)}
                    >
                      <span
                        style={{ overflow: "hidden" }}
                        className={`Small-Body-Copy-RegularSmall-body-copy-Regular-Default`}
                      >
                        {item.name}
                      </span>
                      <Radiobox
                        checked={
                          item.value === radioSeleted.value ? true : false
                        }
                        name={`selectcontent-${index}`}
                        id={`selectcontent-${index}`}
                        color={color === "light" ? "primary" : color}
                        onChange={() => this.handleRadio(item.name, item.value)}
                        style={{ marginRight: -30 }}
                      />
                    </div>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

Select.defaultProps = {
  id: `select-Id`,
  currentSeleted: "",
  name: "select",
  title: "select",
  list: [
    { name: "company 1", value: "one" },
    { name: "company 3", value: "TWO" },
    { name: "company 4", value: "one" },
    { name: "company 5", value: "FICE" },
    { name: "company 6", value: "one" },
    { name: "company 8", value: "NASD" },
    { name: "company 5", value: "ASD" },
  ],
  color: "primary",
  onSelect: function () {
    console.log("selected");
  },
};

Select.protoType = {
  list: PropTypes.array,
  title: PropTypes.string,
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "warning",
    "purple",
    "green",
  ]).isRequired,
  name: PropTypes.string.isRequired,
  defaultValue: 0,
};

export default Select;
