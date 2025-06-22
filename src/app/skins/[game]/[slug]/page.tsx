import { skinsService } from "@/feature/skins/skins.service";
import { NotFoundScreen } from "@/screens/NotFound.screen";
import { SkinScreen } from "@/screens/Skin.screen";
import { generateMetadataSkin } from "@/shared/metadata/generateMetadataSkin";
import { Metadata } from "next";

export async function generateMetadata({
  params: promiseParams,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await promiseParams;
  return await generateMetadataSkin(slug);
}

const Page = async ({
  params,
}: {
  params: Promise<{ game: string; slug: string }>;
}) => {
  const { game, slug } = await params;

  const skin = await skinsService.getSkinBySlug(slug);

  if (!skin) return <NotFoundScreen />;

  return <SkinScreen game={game} slug={slug} />;
};

export default Page;
