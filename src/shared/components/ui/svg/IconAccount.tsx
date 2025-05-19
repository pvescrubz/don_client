import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconAccount: FC<TSvg> = (props) => {
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
        d="M2.40039 20.5123C2.40039 16.7368 5.55468 13.6761 12.0004 13.6761C18.4461 13.6761 21.6004 16.7368 21.6004 20.5123C21.6004 21.113 21.1622 21.5999 20.6216 21.5999H3.37921C2.83862 21.5999 2.40039 21.113 2.40039 20.5123Z"
        stroke="white"
        strokeWidth="2"
      />
      <path
        d="M15.6004 5.9999C15.6004 7.98813 13.9886 9.5999 12.0004 9.5999C10.0122 9.5999 8.40039 7.98813 8.40039 5.9999C8.40039 4.01168 10.0122 2.3999 12.0004 2.3999C13.9886 2.3999 15.6004 4.01168 15.6004 5.9999Z"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
