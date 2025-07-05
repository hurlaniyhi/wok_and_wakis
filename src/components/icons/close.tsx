import * as React from "react";

const SvgIcon = ({isHover}: {isHover: boolean}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    fill="none"
    viewBox="0 0 40 40"
  >
    <circle cx="20" cy="20" r="20" fill="#fff"></circle>
    <path
      fill={isHover ? "#B42318" : "#08090A"}
      fillRule="evenodd"
      d="M13.152 13.152a1.2 1.2 0 0 1 1.696 0L20 18.303l5.152-5.151a1.2 1.2 0 1 1 1.696 1.696L21.697 20l5.151 5.152a1.2 1.2 0 0 1-1.696 1.696L20 21.697l-5.152 5.151a1.2 1.2 0 0 1-1.696-1.696L18.303 20l-5.151-5.152a1.2 1.2 0 0 1 0-1.696"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default SvgIcon;