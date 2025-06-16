import ActivateScreen from "@/screens/ActivatePage.screen";

const Page = async ({ params }: { params: Promise<{ token: string }> }) => {
  const { token } = await params;

  return <ActivateScreen token={token} />;
};

export default Page;
