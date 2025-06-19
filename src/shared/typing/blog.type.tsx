export type TContentBlock =
  | THeading
  | TParagraph
  | THeading
  | TImage
  | TList
  | TOrderedList
  | TBlogNavigation
  | TNestedList;


  export interface TBlogNavigation {
  type: "blog-navigation";
  content: {
    title: string;
    link: string;
  }[];
}
export interface IBlogArticle {
  name: string;
  title: string;
  image: string;
  content: TContentBlock[];
}
export interface TParagraph {
  type: "paragraph";
  content: string;
}

export interface THeading {
  type: "heading";
  level: number;
  content: string;
}

export interface TImage {
  type: "image";
  content: string;
}

export interface THeading {
  type: "heading";
  level: number;
  content: string;
}

export interface TList {
  type: "list";
  items: { content: string }[];
}

export interface TOrderedList {
  type: "ordered-list";
  items: { content: string }[];
}

export interface TNestedList {
  type: "nested-list";
  items: { content: string }[];
}

export interface BlogPostsProps {
  posts: IBlogArticle[];
}
