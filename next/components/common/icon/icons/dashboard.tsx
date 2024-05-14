import React from "react";
import { IconType } from "./type";

export default function Dashboard(props: IconType) {
  const { color } = props;
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_453_4472)">
        <path
          d="M6.73958 0.5H4.23958C3.35553 0.5 2.50768 0.85119 1.88256 1.47631C1.25744 2.10143 0.90625 2.94928 0.90625 3.83333L0.90625 6.33333C0.90625 7.21739 1.25744 8.06523 1.88256 8.69036C2.50768 9.31548 3.35553 9.66667 4.23958 9.66667H6.73958C7.62364 9.66667 8.47148 9.31548 9.09661 8.69036C9.72173 8.06523 10.0729 7.21739 10.0729 6.33333V3.83333C10.0729 2.94928 9.72173 2.10143 9.09661 1.47631C8.47148 0.85119 7.62364 0.5 6.73958 0.5ZM8.40625 6.33333C8.40625 6.77536 8.23065 7.19928 7.91809 7.51184C7.60553 7.8244 7.18161 8 6.73958 8H4.23958C3.79756 8 3.37363 7.8244 3.06107 7.51184C2.74851 7.19928 2.57292 6.77536 2.57292 6.33333V3.83333C2.57292 3.39131 2.74851 2.96738 3.06107 2.65482C3.37363 2.34226 3.79756 2.16667 4.23958 2.16667H6.73958C7.18161 2.16667 7.60553 2.34226 7.91809 2.65482C8.23065 2.96738 8.40625 3.39131 8.40625 3.83333V6.33333ZM17.5729 0.5H15.0729C14.1889 0.5 13.341 0.85119 12.7159 1.47631C12.0908 2.10143 11.7396 2.94928 11.7396 3.83333V6.33333C11.7396 7.21739 12.0908 8.06523 12.7159 8.69036C13.341 9.31548 14.1889 9.66667 15.0729 9.66667H17.5729C18.457 9.66667 19.3048 9.31548 19.9299 8.69036C20.5551 8.06523 20.9062 7.21739 20.9062 6.33333V3.83333C20.9062 2.94928 20.5551 2.10143 19.9299 1.47631C19.3048 0.85119 18.457 0.5 17.5729 0.5ZM19.2396 6.33333C19.2396 6.77536 19.064 7.19928 18.7514 7.51184C18.4389 7.8244 18.0149 8 17.5729 8H15.0729C14.6309 8 14.207 7.8244 13.8944 7.51184C13.5818 7.19928 13.4062 6.77536 13.4062 6.33333V3.83333C13.4062 3.39131 13.5818 2.96738 13.8944 2.65482C14.207 2.34226 14.6309 2.16667 15.0729 2.16667H17.5729C18.0149 2.16667 18.4389 2.34226 18.7514 2.65482C19.064 2.96738 19.2396 3.39131 19.2396 3.83333V6.33333ZM6.73958 11.3333H4.23958C3.35553 11.3333 2.50768 11.6845 1.88256 12.3096C1.25744 12.9348 0.90625 13.7826 0.90625 14.6667L0.90625 17.1667C0.90625 18.0507 1.25744 18.8986 1.88256 19.5237C2.50768 20.1488 3.35553 20.5 4.23958 20.5H6.73958C7.62364 20.5 8.47148 20.1488 9.09661 19.5237C9.72173 18.8986 10.0729 18.0507 10.0729 17.1667V14.6667C10.0729 13.7826 9.72173 12.9348 9.09661 12.3096C8.47148 11.6845 7.62364 11.3333 6.73958 11.3333ZM8.40625 17.1667C8.40625 17.6087 8.23065 18.0326 7.91809 18.3452C7.60553 18.6577 7.18161 18.8333 6.73958 18.8333H4.23958C3.79756 18.8333 3.37363 18.6577 3.06107 18.3452C2.74851 18.0326 2.57292 17.6087 2.57292 17.1667V14.6667C2.57292 14.2246 2.74851 13.8007 3.06107 13.4882C3.37363 13.1756 3.79756 13 4.23958 13H6.73958C7.18161 13 7.60553 13.1756 7.91809 13.4882C8.23065 13.8007 8.40625 14.2246 8.40625 14.6667V17.1667ZM17.5729 11.3333H15.0729C14.1889 11.3333 13.341 11.6845 12.7159 12.3096C12.0908 12.9348 11.7396 13.7826 11.7396 14.6667V17.1667C11.7396 18.0507 12.0908 18.8986 12.7159 19.5237C13.341 20.1488 14.1889 20.5 15.0729 20.5H17.5729C18.457 20.5 19.3048 20.1488 19.9299 19.5237C20.5551 18.8986 20.9062 18.0507 20.9062 17.1667V14.6667C20.9062 13.7826 20.5551 12.9348 19.9299 12.3096C19.3048 11.6845 18.457 11.3333 17.5729 11.3333ZM19.2396 17.1667C19.2396 17.6087 19.064 18.0326 18.7514 18.3452C18.4389 18.6577 18.0149 18.8333 17.5729 18.8333H15.0729C14.6309 18.8333 14.207 18.6577 13.8944 18.3452C13.5818 18.0326 13.4062 17.6087 13.4062 17.1667V14.6667C13.4062 14.2246 13.5818 13.8007 13.8944 13.4882C14.207 13.1756 14.6309 13 15.0729 13H17.5729C18.0149 13 18.4389 13.1756 18.7514 13.4882C19.064 13.8007 19.2396 14.2246 19.2396 14.6667V17.1667Z"
          fill={color || "#3A416F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_453_4472">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.90625 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
