import { BlogPostScreen } from "@/screens/BlogPost.screen";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  if (!slug) return notFound();

  return <BlogPostScreen slug={slug} />;
};

export default Page;
