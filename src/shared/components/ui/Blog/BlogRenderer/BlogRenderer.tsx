import { TContentBlock } from "@/shared/typing/blog.type";
import { FC } from "react";
import { BlogHeading } from "../BlogHeading/BlogHeading";
import { BlogImage } from "../BlogImage/BlogImage";
import { BlogList } from "../BlogList/BlogList";
import { BlogNestedList } from "../BlogNestedList/BlogNestedList";
import { BlogOrderedList } from "../BlogOrderedList/BlogOrderedList";
import { BlogParagraph } from "../BlogParagraph/BlogParagraph";

interface Props {
  block: TContentBlock;
}

export const BlogBlockRenderer: FC<Props> = ({ block }) => {
  if (block.type === "paragraph") {
    return <BlogParagraph data={block} />;
  }
  if (block.type === "heading") {
    return <BlogHeading data={block} />;
  }

  if (block.type === "image") {
    return <BlogImage data={block} />;
  }

  if (block.type === "list") {
    return <BlogList data={block} />;
  }

  if (block.type === "ordered-list") {
    return <BlogOrderedList data={block} />;
  }

  if (block.type === "nested-list") {
    return <BlogNestedList data={block} />;
  }
};
