import React from "react";
import Input from "./Input";

const SearchField = (props) => {
  // props
  const { icon, placeholder, ...attributes } = props;
  return (
    <Input
      {...attributes}
      placeholder={placeholder}
      icon={
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
            strokeWidth="1"
            fillRule="evenodd"
          >
            <g id="search" transform="translate(1.000000, 1.000000)">
              <path
                d="M20.71,19.29 L17,15.61 C19.990214,11.8816448 19.5447727,6.46627305 15.98552,3.27664411 C12.4262673,0.0870151668 6.99463972,0.235643881 3.6151418,3.6151418 C0.235643881,6.99463972 0.0870151668,12.4262673 3.27664411,15.98552 C6.46627305,19.5447727 11.8816448,19.990214 15.61,17 L19.29,20.68 C19.4777666,20.8693127 19.7333625,20.9757983 20,20.9757983 C20.2666375,20.9757983 20.5222334,20.8693127 20.71,20.68 C21.0846537,20.2924034 21.0846537,19.6775966 20.71,19.29 Z M10,17 C6.13400675,17 3,13.8659932 3,10 C3,6.13400675 6.13400675,3 10,3 C13.8659932,3 17,6.13400675 17,10 C17,11.8565154 16.2625021,13.6369928 14.9497475,14.9497475 C13.6369928,16.2625021 11.8565154,17 10,17 Z"
                id="Shape"
              ></path>
            </g>
          </g>
        </svg>
      }
    />
  );
};

SearchField.defaultProps = {
  placeholder: "Search...",
};

export default SearchField;
