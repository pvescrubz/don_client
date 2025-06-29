import { BlogPostScreen } from "@/screens/BlogPost.screen";
import { NotFoundScreen } from "@/screens/NotFound.screen";
import { BLOG_CONFIG } from "@/shared/content/blog.config";
import { generateMetadataPost } from "@/shared/metadata/generateMetadataPost";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateMetadataPost(slug);
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = BLOG_CONFIG[slug];

  if (!post) return <NotFoundScreen />;

  return <BlogPostScreen slug={slug} />;
};

export default Page;
