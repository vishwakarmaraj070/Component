import React, { useState } from "react";
import { IconButton, CloseIconButton } from "../Button";
const CardHeader = React.memo((props) => {
  const {
    title,
    icon,
    children,
    searchField,
    onChange,
    onClick,
    onClose,
    className,
    style,
    isLoading,
    name,
    id,
    ...attr
  } = props;

  const [focus, setFocus] = useState(false);
  const handleOnChange = (e) => {
    onChange && onChange(e);
    if (e.target.value) {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  return (
    <div className={`card-header ${className}`} style={style}>
      <span className="icon-title">
        <span className="icon">{icon}</span>
        <span className="card-title">{title}</span>
      </span>
      <span className="other">
        {children}
        {searchField && (
          <div className="search-input">
            <input
              placeholder="Search..."
              name={name}
              {...attr}
              type="search"
              className={`${focus ? "focus" : ""}`}
              id={id}
              onChange={handleOnChange}
            />
            <div className="hader-search-box">
              <IconButton
                flat
                rounded
                isLoading={isLoading}
                onClick={(e) => onClick && onClick(e)}
                size="sm"
                id={`search-${id}`}
                className={`hader-search-btn ${focus ? "focus" : ""}`}
              >
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
              </IconButton>
              <CloseIconButton
                flat
                size="sm"
                color="danger"
                onClick={(e) => onClose && onClose(e)}
                id={`close-${id}`}
                rounded
                className={`hader-search-btn ${focus ? "focus" : ""}`}
              />
            </div>
          </div>
        )}
      </span>
    </div>
  );
});

CardHeader.defaultProps = {
  icon: (
    <React.Fragment>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Icons/Basic/apps"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
        >
          <g id="apps" transform="translate(2.000000, 2.000000)">
            <path
              d="M8,11 L1,11 C0.44771525,11 0,11.4477153 0,12 L0,19 C0,19.5522847 0.44771525,20 1,20 L8,20 C8.55228475,20 9,19.5522847 9,19 L9,12 C9,11.4477153 8.55228475,11 8,11 Z M7,18 L2,18 L2,13 L7,13 L7,18 Z M19,0 L12,0 C11.4477153,0 11,0.44771525 11,1 L11,8 C11,8.55228475 11.4477153,9 12,9 L19,9 C19.5522847,9 20,8.55228475 20,8 L20,1 C20,0.44771525 19.5522847,0 19,0 Z M18,7 L13,7 L13,2 L18,2 L18,7 Z M19,11 L12,11 C11.4477153,11 11,11.4477153 11,12 L11,19 C11,19.5522847 11.4477153,20 12,20 L19,20 C19.5522847,20 20,19.5522847 20,19 L20,12 C20,11.4477153 19.5522847,11 19,11 Z M18,18 L13,18 L13,13 L18,13 L18,18 Z M8,0 L1,0 C0.44771525,0 0,0.44771525 0,1 L0,8 C0,8.55228475 0.44771525,9 1,9 L8,9 C8.55228475,9 9,8.55228475 9,8 L9,1 C9,0.44771525 8.55228475,0 8,0 Z M7,7 L2,7 L2,2 L7,2 L7,7 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    </React.Fragment>
  ),
  title: "title",
  className: "",
  id: "card-header",
};

export default CardHeader;
