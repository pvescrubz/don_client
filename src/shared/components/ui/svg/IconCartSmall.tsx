import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconCartSmall: FC<TSvg> = (props) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.47485 3.75H16.5L15 9H6.28256M15.75 12H6.75L5.25 2.25H3M3 6H1.5M3.75 8.25H1.5M4.5 10.5H1.5M7.5 15C7.5 15.4142 7.16421 15.75 6.75 15.75C6.33579 15.75 6 15.4142 6 15C6 14.5858 6.33579 14.25 6.75 14.25C7.16421 14.25 7.5 14.5858 7.5 15ZM15.75 15C15.75 15.4142 15.4142 15.75 15 15.75C14.5858 15.75 14.25 15.4142 14.25 15C14.25 14.5858 14.5858 14.25 15 14.25C15.4142 14.25 15.75 14.5858 15.75 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
