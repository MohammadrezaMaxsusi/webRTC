import React from "react";
import { IconType } from "./type";

export default function History(props: IconType) {
  const { size, color } = props;
  return (
    <svg
      width={(size || 24) + "px"}
      height={(size || 24) + "px"}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_453_4475)">
        <path
          d="M10.9893 0.5C8.52718 0.501755 6.1527 1.41385 4.32259 3.06083V1.33333C4.32259 1.11232 4.23479 0.900358 4.07851 0.744078C3.92223 0.587797 3.71027 0.5 3.48926 0.5C3.26824 0.5 3.05628 0.587797 2.9 0.744078C2.74372 0.900358 2.65592 1.11232 2.65592 1.33333V3.83333C2.65592 4.49637 2.91932 5.13226 3.38816 5.6011C3.857 6.06994 4.49288 6.33333 5.15592 6.33333H7.65592C7.87694 6.33333 8.0889 6.24554 8.24518 6.08926C8.40146 5.93298 8.48926 5.72101 8.48926 5.5C8.48926 5.27899 8.40146 5.06703 8.24518 4.91074C8.0889 4.75446 7.87694 4.66667 7.65592 4.66667H5.15592C5.12782 4.6625 5.1 4.65666 5.07259 4.64917C6.43053 3.28152 8.22103 2.42756 10.1385 2.23305C12.0559 2.03855 13.9814 2.51555 15.5864 3.58263C17.1913 4.64972 18.3761 6.24075 18.9386 8.08413C19.5011 9.92751 19.4063 11.909 18.6706 13.6903C17.9348 15.4716 16.6036 16.9423 14.9042 17.8515C13.2048 18.7606 11.2426 19.0517 9.35244 18.6752C7.46229 18.2986 5.76141 17.2778 4.54014 15.7868C3.31886 14.2959 2.6529 12.4273 2.65592 10.5C2.65592 10.279 2.56813 10.067 2.41185 9.91074C2.25557 9.75447 2.0436 9.66667 1.82259 9.66667C1.60158 9.66667 1.38962 9.75447 1.23334 9.91074C1.07706 10.067 0.989258 10.279 0.989258 10.5C0.989258 12.4778 1.57575 14.4112 2.67456 16.0557C3.77338 17.7002 5.33516 18.9819 7.16242 19.7388C8.98969 20.4957 11.0004 20.6937 12.9402 20.3079C14.88 19.922 16.6618 18.9696 18.0603 17.5711C19.4589 16.1725 20.4113 14.3907 20.7971 12.4509C21.183 10.5111 20.9849 8.50043 20.2281 6.67317C19.4712 4.8459 18.1895 3.28412 16.545 2.1853C14.9005 1.08649 12.9671 0.5 10.9893 0.5Z"
          fill={color || "#3A416F"}
        />
        <path
          d="M10.9896 5.5C10.7686 5.5 10.5566 5.5878 10.4003 5.74408C10.244 5.90036 10.1562 6.11232 10.1562 6.33333V10.5C10.1563 10.721 10.2441 10.9329 10.4004 11.0892L12.9004 13.5892C13.0576 13.741 13.2681 13.825 13.4866 13.8231C13.7051 13.8212 13.9141 13.7335 14.0686 13.579C14.2231 13.4245 14.3107 13.2155 14.3126 12.997C14.3145 12.7785 14.2305 12.568 14.0787 12.4108L11.8229 10.155V6.33333C11.8229 6.11232 11.7351 5.90036 11.5788 5.74408C11.4226 5.5878 11.2106 5.5 10.9896 5.5Z"
          fill={color || "#3A416F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_453_4475">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.989258 0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
