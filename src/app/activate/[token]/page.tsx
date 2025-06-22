import { ActivateScreen } from "@/screens/ActivatePage.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Активация аккаунта",
  description: "Активация аккаунта",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  robots: DISABLED_ROBOTS,
};

const Page = async ({ params }: { params: Promise<{ token: string }> }) => {
  const { token } = await params;

  return <ActivateScreen token={token} />;
};

export default Page;
