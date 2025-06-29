import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconCart: FC<TSvg> = (props) => {
  return (
    <svg
      width="29"
      height="25"
      viewBox="0 0 29 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.62475 3.5H27L24.5 12.25H9.97094M25.75 17.25H10.75L8.25 1H4.5M4.5 7.25H2M5.75 11H2M7 14.75H2M12 22.25C12 22.9404 11.4403 23.5 10.75 23.5C10.0596 23.5 9.5 22.9404 9.5 22.25C9.5 21.5596 10.0596 21 10.75 21C11.4403 21 12 21.5596 12 22.25ZM25.75 22.25C25.75 22.9404 25.1904 23.5 24.5 23.5C23.8096 23.5 23.25 22.9404 23.25 22.25C23.25 21.5596 23.8096 21 24.5 21C25.1904 21 25.75 21.5596 25.75 22.25Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
