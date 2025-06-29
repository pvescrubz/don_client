import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconRedCart: FC<TSvg> = (props) => {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.97485 2.5H16L14.5 7.75H5.78256M15.25 10.75H6.25L4.75 1H2.5M2.5 4.75H1M3.25 7H1M4 9.25H1M7 13.75C7 14.1642 6.66421 14.5 6.25 14.5C5.83579 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.83579 13 6.25 13C6.66421 13 7 13.3358 7 13.75ZM15.25 13.75C15.25 14.1642 14.9142 14.5 14.5 14.5C14.0858 14.5 13.75 14.1642 13.75 13.75C13.75 13.3358 14.0858 13 14.5 13C14.9142 13 15.25 13.3358 15.25 13.75Z"
        stroke="#DE1717"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
