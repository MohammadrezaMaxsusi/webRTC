import React from "react";
import { IconType } from "./type";

export default function Exit(props: IconType) {
  const { color } = props;
  return (
    <svg
      width="22"
      height="21"
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_453_4805)">
        <path
          d="M20.7001 11.9528L19.0376 5.97126C18.5504 4.21892 17.4913 2.67976 16.0288 1.59842C14.5663 0.51708 12.7844 -0.0443785 10.9662 0.00329163C9.14798 0.0509617 7.39788 0.705024 5.99408 1.86151C4.59028 3.018 3.61333 4.61055 3.21852 6.38601L1.9314 12.1741C1.78922 12.8137 1.79251 13.477 1.94102 14.1152C2.08952 14.7533 2.37945 15.3499 2.78941 15.861C3.19936 16.3721 3.71887 16.7845 4.30957 17.068C4.90027 17.3514 5.54709 17.4985 6.20227 17.4985H7.17702C7.37785 18.4875 7.91441 19.3767 8.6958 20.0153C9.47718 20.654 10.4553 21.0029 11.4645 21.0029C12.4737 21.0029 13.4519 20.654 14.2333 20.0153C15.0146 19.3767 15.5512 18.4875 15.752 17.4985H16.4853C17.1597 17.4986 17.8251 17.3427 18.4293 17.043C19.0336 16.7434 19.5603 16.3081 19.9685 15.7711C20.3767 15.2342 20.6552 14.6102 20.7822 13.9478C20.9093 13.2854 20.8806 12.6026 20.7001 11.9528ZM11.4645 19.2485C10.9235 19.2463 10.3965 19.0769 9.95541 18.7637C9.51435 18.4504 9.18085 18.0086 9.00052 17.4985H13.9285C13.7482 18.0086 13.4147 18.4504 12.9736 18.7637C12.5326 19.0769 12.0055 19.2463 11.4645 19.2485ZM18.5748 14.7116C18.3309 15.0351 18.0151 15.2972 17.6522 15.4772C17.2893 15.6572 16.8895 15.7501 16.4844 15.7485H6.20227C5.80921 15.7484 5.42118 15.6601 5.06682 15.49C4.71246 15.3199 4.40083 15.0724 4.15491 14.7658C3.909 14.4592 3.73509 14.1012 3.64601 13.7184C3.55694 13.3355 3.55498 12.9376 3.64027 12.5539L4.92652 6.76488C5.23658 5.37031 6.00392 4.11941 7.10655 3.21103C8.20918 2.30264 9.58382 1.78891 11.012 1.7515C12.4401 1.71408 13.8397 2.15514 14.9884 3.00454C16.1371 3.85395 16.9689 5.06296 17.3515 6.43938L19.014 12.4209C19.1239 12.8106 19.1414 13.2205 19.0651 13.6182C18.9889 14.0158 18.821 14.3902 18.5748 14.7116Z"
          fill={color || "#3A416F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_453_4805">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.964844 -0.00146484)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
