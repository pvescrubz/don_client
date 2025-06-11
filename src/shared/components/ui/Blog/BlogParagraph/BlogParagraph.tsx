
import { TParagraph } from "@/shared/typing/elements.type";
import { FC } from "react";

interface Props {
  data: TParagraph;
}

export const BlogParagraph: FC<Props> = ({ data }) => {
  return <p>{data.content}</p>;
};