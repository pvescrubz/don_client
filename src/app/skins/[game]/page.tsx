import SkinPage from "@/screens/Skins.screen";
import { isMobileDevice } from "@/shared/lib/isMobileDevice";

import { TQuery } from "@/shared/typing/query.type";
import { notFound } from "next/navigation";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ game: string }>;
  searchParams: Promise<TQuery>;
}) => {
  const { game } = await params;
  if (game) return notFound();

  const queryParams = await searchParams;
  const isMobile = await isMobileDevice();

  return (
    <>
      {game && <SkinPage game={game} query={queryParams} isMobile={isMobile} />}
    </>
  );
};

export default Page;
