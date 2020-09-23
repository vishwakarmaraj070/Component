import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

const SearchFieldOnType = (props) => {
  // props
  const { value, onClick, placeholder, ...attributes } = props;
  return (
    <Input
      {...attributes}
      icon={
        value.length > 0 ? (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Icons/Basic/multiply"
              stroke="none"
              stroke-width="1"
              fill="#eb4747"
              fill-rule="evenodd"
            >
              <g id="multiply" transform="translate(3.000000, 3.000000)">
                <path
                  d="M10.41,9 L16.71,2.71 C17.1021222,2.31787783 17.1021222,1.68212217 16.71,1.29 C16.3178778,0.897877828 15.6821222,0.897877828 15.29,1.29 L9,7.59 L2.71,1.29 C2.31787783,0.897877838 1.68212218,0.897877842 1.29000001,1.29000001 C0.897877842,1.68212218 0.897877838,2.31787783 1.29,2.71 L7.59,9 L1.29,15.29 C1.10068735,15.4777666 0.994201676,15.7333625 0.994201676,16 C0.994201676,16.2666375 1.10068735,16.5222334 1.29,16.71 C1.4777666,16.8993127 1.73336246,17.0057983 2,17.0057983 C2.26663754,17.0057983 2.5222334,16.8993127 2.71,16.71 L9,10.41 L15.29,16.71 C15.4777666,16.8993127 15.7333625,17.0057983 16,17.0057983 C16.2666375,17.0057983 16.5222334,16.8993127 16.71,16.71 C16.8993127,16.5222334 17.0057983,16.2666375 17.0057983,16 C17.0057983,15.7333625 16.8993127,15.4777666 16.71,15.29 L10.41,9 Z"
                  id="Path"
                ></path>
              </g>
            </g>
          </svg>
        ) : (
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Icons/Basic/search"
              stroke="none"
              stroke-width="1"
              fill-rule="evenodd"
            >
              <g id="search" transform="translate(1.000000, 1.000000)">
                <path
                  d="M20.71,19.29 L17,15.61 C19.990214,11.8816448 19.5447727,6.46627305 15.98552,3.27664411 C12.4262673,0.0870151668 6.99463972,0.235643881 3.6151418,3.6151418 C0.235643881,6.99463972 0.0870151668,12.4262673 3.27664411,15.98552 C6.46627305,19.5447727 11.8816448,19.990214 15.61,17 L19.29,20.68 C19.4777666,20.8693127 19.7333625,20.9757983 20,20.9757983 C20.2666375,20.9757983 20.5222334,20.8693127 20.71,20.68 C21.0846537,20.2924034 21.0846537,19.6775966 20.71,19.29 Z M10,17 C6.13400675,17 3,13.8659932 3,10 C3,6.13400675 6.13400675,3 10,3 C13.8659932,3 17,6.13400675 17,10 C17,11.8565154 16.2625021,13.6369928 14.9497475,14.9497475 C13.6369928,16.2625021 11.8565154,17 10,17 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </svg>
        )
      }
      value={value}
      placeholder={placeholder}
      onClick={(e) => {
        setTimeout(() => {
          onClick && onClick(e);
        }, 400);
      }}
    />
  );
};
SearchFieldOnType.defaultProps = {
  value: "",
  placeholder: "Search...",
};

SearchFieldOnType.propTypes = {
  onClick: PropTypes.func,
};

export default SearchFieldOnType;
