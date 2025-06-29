import { NotFoundScreen } from "@/screens/NotFound.screen";
import { SkinsScreen } from "@/screens/Skins.screen";
import { isMobileDevice } from "@/shared/lib/isMobileDevice";
import { generateMetadataSkins } from "@/shared/metadata/generateMetadataSkins";
import { TQuery } from "@/shared/typing/query.type";
import { isGameValid } from "@/shared/utils/is-game-valid";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ game: string }>;
}): Promise<Metadata> {
  const { game } = await params;
  return generateMetadataSkins(game);
}

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ game: string }>;
  searchParams: Promise<TQuery>;
}) => {
  const { game } = await params;

  if (!isGameValid(game)) return <NotFoundScreen />;

  const queryParams = await searchParams;
  const isMobile = await isMobileDevice();

  return <SkinsScreen game={game} query={queryParams} isMobile={isMobile} />;
};

export default Page;
