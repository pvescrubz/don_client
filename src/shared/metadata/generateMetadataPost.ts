import { Metadata } from "next";
import { BLOG_CONFIG } from "../content/blog.config";
import { APP_PAGES } from "../dashboard/app.dashboard";
import { CONFIG } from "../model/config";

export const generateMetadataPost = (slug: string): Metadata => {
  const post = BLOG_CONFIG[slug];

  const firstParagraph = post.content.find(
    (block) => block.type === "paragraph"
  )?.content;

  const description = firstParagraph
    ? firstParagraph.slice(0, 157) + (firstParagraph.length > 157 ? "..." : "")
    : "Актуальные новости, советы и обзоры из мира скинов на Don Viche. Будь в курсе всего важного!";

  const META = {
    title: post.title,
    description,
    images: [
      {
        url: `${CONFIG.APP_BASE_URL}${post.image}`,
        width: 1000,
        height: 420,
      },
    ],
  };

  return {
    ...META,
    openGraph: {
      ...META,
      type: "article",
    },
    alternates: {
      canonical: `${APP_PAGES.BLOG.slug}/${post.name}`,
    },
  };
};
