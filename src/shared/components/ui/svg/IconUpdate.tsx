import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconUpdate: FC<TSvg> = (props) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.793 16.9999C24.793 21.6944 20.9874 25.4999 16.293 25.4999C13.3254 25.4999 10.713 23.9792 9.19266 21.6745M7.88989 15.7122C8.51047 11.6288 12.0363 8.49994 16.293 8.49994C19.3552 8.49994 22.0392 10.1192 23.5354 12.5482M10.0467 15.937L7.79276 18.1909L5.53886 15.937L10.0467 15.937ZM22.5394 18.1918L24.7933 15.9379L27.0472 18.1918L22.5394 18.1918Z"
        stroke="white"
        strokeOpacity="0.6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
