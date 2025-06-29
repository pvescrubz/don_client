import { TSvg } from "@/shared/typing/elements.type";
import { FC } from "react";

export const IconPriceLowToHigh: FC<TSvg> = (props) => {
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
        d="M10.0811 13.0295H16.5M10.0811 9.41843H14.666M10.0811 5.80734H12.8321M4.35423 13.5V4.5M4.35423 4.5L1.5 7.25121M4.35423 4.5L7.31745 7.25121"
        stroke="currentColor"

        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
