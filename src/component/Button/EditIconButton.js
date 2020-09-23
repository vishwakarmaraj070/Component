import React from "react";
import IconButton from "./IconButton";

const EditIconButton = React.memo((props) => {
  const { children, title, color, ...attributes } = props;
  return (
    <IconButton title={title} color={color} {...attributes}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Icons/Basic/pen"
          stroke="none"
          stroke-width="1"
          fill-rule="evenodd"
        >
          <g id="pen" transform="translate(2.000000, 2.000000)">
            <path
              d="M20.0000167,5.24 C20.0015368,4.97419702 19.8971865,4.71871883 19.71,4.53 L15.47,0.29 C15.2812812,0.102813486 15.025803,-0.0015367588 14.76,-1.67362795e-05 C14.494197,-0.0015367588 14.2387188,0.102813486 14.05,0.29 L11.22,3.12 L11.22,3.12 L0.29,14.05 C0.102813486,14.2387188 -0.0015367588,14.494197 -1.67362795e-05,14.76 L-1.67362795e-05,19 C-1.67362795e-05,19.5522847 0.44771525,20 1,20 L5.24,20 C5.52298134,20.0153924 5.79920456,19.9099914 6,19.71 L16.87,8.78 L16.87,8.78 L19.71,6 C19.8012768,5.903081 19.8756428,5.79153207 19.93,5.67 C19.9396348,5.59029009 19.9396348,5.50970991 19.93,5.43 C19.9346784,5.38345059 19.9346784,5.33654941 19.93,5.29 L20.0000167,5.24 Z M4.83,18 L2,18 L2,15.17 L11.93,5.24 L14.76,8.07 L4.83,18 Z M16.17,6.66 L13.34,3.83 L14.76,2.42 L17.58,5.24 L16.17,6.66 Z"
              id="Shape"
            ></path>
          </g>
        </g>
      </svg>
    </IconButton>
  );
});

EditIconButton.defaultProps = {
  title: "Edit",
  color: "secondary",
};
export default EditIconButton;
