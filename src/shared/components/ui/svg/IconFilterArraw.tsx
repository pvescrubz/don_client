import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconFilterArraw: FC<TSvg> = (props) => {
  return (
    <svg
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 7.5L9.00081 12.08L14 7.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
