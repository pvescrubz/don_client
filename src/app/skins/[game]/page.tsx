import SkinksPage from "@/pages/SkinksPage";

const Page = async ({
  params,
  searchParams,
}: {
  params: Promise<{ game: string }>;
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const { game } = await params;
  const queryParams = await searchParams;
  
  return <>{game && <SkinksPage game={game} query={queryParams} />}</>;
};

export default Page;
