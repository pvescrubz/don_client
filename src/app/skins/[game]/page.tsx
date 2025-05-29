import SkinPage from "@/pages/SkinsPage";
import { isMobileDevice } from "@/shared/lib/isMobileDevice";
import { TQuery } from "@/shared/typing/query.type";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ game: string }>;
  searchParams: Promise<TQuery>;
}) => {
  const { game } = await params;
  const queryParams = await searchParams;
  const isMobile = await isMobileDevice();

  return (
    <>
      {game && (
        <SkinPage game={game} query={queryParams} isMobile={isMobile} />
      )}
    </>
  );
};

export default Page;
