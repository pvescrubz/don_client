import { BlogPostScreen } from "@/screens/BlogPost.screen";
import { BlogConfig } from "@/shared/content/blog.config";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";
import { notFound } from "next/navigation";


type BlogPostKey = keyof typeof BlogConfig;


const generatePostMetadata = (post: (typeof BlogConfig)[BlogPostKey]): Metadata => {
  
  return {
    
    title: post.title,
    description: post.title,
     alternates: {
      canonical: `${CONFIG.APP_BASE_URL}${APP_PAGES.BLOG}${post.name}`, 
    },
    openGraph: {
      title: post.title,
      description: post.title,
      images: [
        {
          url: `${CONFIG.APP_BASE_URL}${post.image}`,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },
    twitter: {
      title: post.title,
      description: post.title,
      images: [`${CONFIG.APP_BASE_URL}${post.image}`],
    },
  };
};


export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BlogConfig[slug as BlogPostKey];

  if (!post) {
    return {};
  }

  return generatePostMetadata(post);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const post = BlogConfig[slug as BlogPostKey];

  if (!post) {
    return notFound();
  }

  return <BlogPostScreen slug={slug} />;
};

export default Page;