import SkinPage from "@/pages/SkinPage";

const Page = async ({
  params,
}: {
  params: Promise<{ game: string; slug: string }>;
}) => {
  const { game, slug } = await params;

  return <SkinPage game={game} slug={slug} />;
};

export default Page;
