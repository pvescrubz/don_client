import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconPromo: FC<TSvg> = (props) => {
  return (
    <>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M8.3999 15.5999L15.5999 8.3999M8.9538 8.94924L8.93965 8.93495M15.0643 15.1226L15.0502 15.1083M21.5999 11.9999C21.5999 17.3018 17.3018 21.5999 11.9999 21.5999C6.69797 21.5999 2.3999 17.3018 2.3999 11.9999C2.3999 6.69797 6.69797 2.3999 11.9999 2.3999C17.3018 2.3999 21.5999 6.69797 21.5999 11.9999Z"
          stroke="white"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};
