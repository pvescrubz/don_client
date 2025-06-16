import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconActive: FC<TSvg> = (props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.5 11.5L10.9993 16L14.9993 6.49999M1.5 11.5C1.5 5.97715 5.97715 1.5 11.5 1.5C17.0228 1.5 21.5 5.97715 21.5 11.5C21.5 17.0228 17.0228 21.5 11.5 21.5C5.97715 21.5 1.5 17.0228 1.5 11.5Z"
        stroke="#32DE17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
