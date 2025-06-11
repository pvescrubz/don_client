import BlogPostPage from "@/pages/BlogPostPage";

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  return <BlogPostPage slug={slug} />;
};

export default Page;
