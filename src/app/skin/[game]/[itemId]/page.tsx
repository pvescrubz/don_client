import SkinPage from "@/pages/SkinPage";

const Page = async ({
  params,
}: {
  params: Promise<{ game: string; itemId: string }>;
}) => {
  const { game, itemId } = await params;

  return <SkinPage game={game} itemId={itemId} />;
};

export default Page;
