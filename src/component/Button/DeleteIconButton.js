import React from "react";
import IconButton from "./IconButton";

const DeleteIconButton = React.memo((props) => {
  const { children, title, color, ...attribute } = props;
  return (
    <IconButton title={title} color={color} {...attribute}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Icons/Basic/trash"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
        >
          <g id="trash" transform="translate(3.000000, 2.000000)">
            <path
              d="M17,4 L13,4 L13,3 C13,1.34314575 11.6568542,-4.4408921e-16 10,-4.4408921e-16 L8,-4.4408921e-16 C6.34314575,-4.4408921e-16 5,1.34314575 5,3 L5,4 L1,4 C0.44771525,4 0,4.44771525 0,5 C0,5.55228475 0.44771525,6 1,6 L2,6 L2,17 C2,18.6568542 3.34314575,20 5,20 L13,20 C14.6568542,20 16,18.6568542 16,17 L16,6 L17,6 C17.5522847,6 18,5.55228475 18,5 C18,4.44771525 17.5522847,4 17,4 Z M7,3 C7,2.44771525 7.44771525,2 8,2 L10,2 C10.5522847,2 11,2.44771525 11,3 L11,4 L7,4 L7,3 Z M14,17 C14,17.5522847 13.5522847,18 13,18 L5,18 C4.44771525,18 4,17.5522847 4,17 L4,6 L14,6 L14,17 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    </IconButton>
  );
});

DeleteIconButton.defaultProps = {
  color: "danger",
  title: "Delete",
};

export default DeleteIconButton;
