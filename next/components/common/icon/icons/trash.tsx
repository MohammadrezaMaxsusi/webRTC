import React from "react";
import { IconType } from "./type";

export default function Trash(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      width={size || "21"}
      height={size || "21"}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.0306 16.3651C5.0306 17.2817 5.7806 18.0317 6.69727 18.0317H13.3639C14.2806 18.0317 15.0306 17.2817 15.0306 16.3651V8.03174C15.0306 7.11507 14.2806 6.36507 13.3639 6.36507H6.69727C5.7806 6.36507 5.0306 7.11507 5.0306 8.03174V16.3651ZM15.0306 3.86507H12.9473L12.3556 3.2734C12.2056 3.1234 11.9889 3.03174 11.7723 3.03174H8.28893C8.07227 3.03174 7.8556 3.1234 7.7056 3.2734L7.11393 3.86507H5.0306C4.57227 3.86507 4.19727 4.24007 4.19727 4.6984C4.19727 5.15674 4.57227 5.53174 5.0306 5.53174H15.0306C15.4889 5.53174 15.8639 5.15674 15.8639 4.6984C15.8639 4.24007 15.4889 3.86507 15.0306 3.86507Z"
        fill={color || "#3A416F"}
      />
    </svg>
  );
}
