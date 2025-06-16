import AddBalanceScreen from "@/screens/AddBalance.screen";

const Page = async ({ params }: { params: Promise<{ platform: string }> }) => {
  const { platform } = await params;

  return <AddBalanceScreen platform={platform} />;
};

export default Page;
