import { SkinScreen } from "@/screens/Skin.screen";
import { notFound } from "next/navigation";




const Page = async ({
  params,
}: {
  params: Promise<{ game: string; slug: string }>;
}) => {
  const { game, slug } = await params;
  if (!game || !slug) notFound();

  return <SkinScreen game={game} slug={slug} />;
};

export default Page;
