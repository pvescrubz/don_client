import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconCheck: FC<TSvg> = (props) => {
  return (
    <svg
      width="12"
      height="10"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.8002 1.3999L3.64068 8.5999L1.2002 6.14562"
        stroke="#DF2115"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
