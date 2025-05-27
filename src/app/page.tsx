import HomePage from "@/pages/HomePage";

const Page = async ({
  params,
}: {
  params: Promise<{ platform: string }>;
}) => {
  const { platform } = await params;
  return <HomePage platform={platform} />;
};

export default Page;
