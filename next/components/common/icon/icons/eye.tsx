import React from "react";
import { IconType } from "./type";

export default function Eye(props: IconType) {
  const { color, size } = props;
  return (
    <svg
      width={(size || 24) + "px"}
      height={(Number(size) - 4 || 19) + "px"}
      viewBox="0 0 19 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.8422 6.73731C18.1837 5.29731 15.6015 0.601562 9.97647 0.601562C4.35147 0.601562 1.76922 5.29731 1.11072 6.73731C1.02232 6.93029 0.976563 7.14005 0.976562 7.35231C0.976562 7.56457 1.02232 7.77434 1.11072 7.96731C1.76922 9.40581 4.35147 14.1016 9.97647 14.1016C15.6015 14.1016 18.1837 9.40581 18.8422 7.96581C18.9304 7.77305 18.9761 7.56355 18.9761 7.35156C18.9761 7.13957 18.9304 6.93007 18.8422 6.73731ZM9.97647 12.6016C5.24622 12.6016 3.03897 8.57706 2.47647 7.35981C3.03897 6.12606 5.24622 2.10156 9.97647 2.10156C14.6955 2.10156 16.9035 6.10881 17.4765 7.35156C16.9035 8.59431 14.6955 12.6016 9.97647 12.6016Z"
        fill={color || "#3A416F"}
      />
      <path
        d="M9.97656 3.60156C9.23488 3.60156 8.50986 3.8215 7.89318 4.23355C7.27649 4.64561 6.79584 5.23128 6.51202 5.9165C6.22819 6.60172 6.15392 7.35572 6.29862 8.08315C6.44331 8.81058 6.80047 9.47877 7.32491 10.0032C7.84936 10.5277 8.51755 10.8848 9.24498 11.0295C9.9724 11.1742 10.7264 11.0999 11.4116 10.8161C12.0968 10.5323 12.6825 10.0516 13.0946 9.43495C13.5066 8.81827 13.7266 8.09324 13.7266 7.35156C13.7254 6.35737 13.3299 5.40423 12.6269 4.70123C11.9239 3.99822 10.9708 3.60275 9.97656 3.60156ZM9.97656 9.60156C9.53156 9.60156 9.09654 9.4696 8.72653 9.22237C8.35652 8.97514 8.06813 8.62373 7.89784 8.2126C7.72754 7.80147 7.68298 7.34907 7.7698 6.91261C7.85661 6.47615 8.07091 6.07524 8.38557 5.76057C8.70024 5.4459 9.10115 5.23161 9.53761 5.1448C9.97407 5.05798 10.4265 5.10254 10.8376 5.27283C11.2487 5.44313 11.6001 5.73152 11.8474 6.10153C12.0946 6.47154 12.2266 6.90655 12.2266 7.35156C12.2266 7.9483 11.9895 8.5206 11.5676 8.94255C11.1456 9.36451 10.5733 9.60156 9.97656 9.60156Z"
        fill={color || "#3A416F"}
      />
    </svg>
  );
}