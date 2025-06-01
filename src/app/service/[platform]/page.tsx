import AddBalancePage from "@/pages/AddBalance";

const Page = async ({ params }: { params: Promise<{ platform: string }> }) => {
  const { platform } = await params;

  return <AddBalancePage platform={platform} />;
};

export default Page;
