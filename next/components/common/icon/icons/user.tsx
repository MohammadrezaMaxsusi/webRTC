import React from "react";
import { IconType } from "./type";

export default function Exit(props: IconType) {
  const { color } = props;
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_453_4810)">
        <path
          d="M10.8584 10.6138C11.8473 10.6138 12.814 10.3205 13.6362 9.77112C14.4585 9.22171 15.0994 8.44082 15.4778 7.52719C15.8562 6.61356 15.9553 5.60823 15.7623 4.63832C15.5694 3.66842 15.0932 2.7775 14.3939 2.07824C13.6947 1.37898 12.8038 0.902772 11.8338 0.709845C10.8639 0.516919 9.85861 0.615936 8.94498 0.994374C8.03135 1.37281 7.25046 2.01367 6.70105 2.83592C6.15164 3.65817 5.8584 4.62487 5.8584 5.61377C5.85972 6.93945 6.38693 8.21045 7.32433 9.14784C8.26172 10.0852 9.53272 10.6124 10.8584 10.6138ZM10.8584 2.28044C11.5177 2.28044 12.1621 2.47594 12.7103 2.84221C13.2585 3.20848 13.6857 3.72907 13.938 4.33816C14.1903 4.94725 14.2563 5.61747 14.1277 6.26407C13.9991 6.91068 13.6816 7.50462 13.2154 7.9708C12.7492 8.43697 12.1553 8.75444 11.5087 8.88306C10.8621 9.01167 10.1919 8.94566 9.58279 8.69337C8.9737 8.44108 8.4531 8.01384 8.08683 7.46567C7.72056 6.91751 7.52506 6.27304 7.52506 5.61377C7.52506 4.72972 7.87625 3.88187 8.50138 3.25675C9.1265 2.63163 9.97434 2.28044 10.8584 2.28044ZM10.8584 12.2804C8.86995 12.2826 6.96358 13.0735 5.55753 14.4796C4.15149 15.8856 3.3606 17.792 3.3584 19.7804C3.3584 20.0015 3.4462 20.2134 3.60248 20.3697C3.75876 20.526 3.97072 20.6138 4.19173 20.6138C4.41275 20.6138 4.62471 20.526 4.78099 20.3697C4.93727 20.2134 5.02507 20.0015 5.02507 19.7804C5.02507 18.2333 5.63965 16.7496 6.73361 15.6556C7.82757 14.5617 9.3113 13.9471 10.8584 13.9471C12.4055 13.9471 13.8892 14.5617 14.9832 15.6556C16.0771 16.7496 16.6917 18.2333 16.6917 19.7804C16.6917 20.0015 16.7795 20.2134 16.9358 20.3697C17.0921 20.526 17.3041 20.6138 17.5251 20.6138C17.7461 20.6138 17.958 20.526 18.1143 20.3697C18.2706 20.2134 18.3584 20.0015 18.3584 19.7804C18.3562 17.792 17.5653 15.8856 16.1593 14.4796C14.7532 13.0735 12.8468 12.2826 10.8584 12.2804Z"
          fill={color || "#3A416F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_453_4810">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.858398 0.61377)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
