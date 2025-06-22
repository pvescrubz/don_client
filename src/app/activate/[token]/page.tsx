import { ActivateScreen } from "@/screens/ActivatePage.screen";
import { DISABLED_ROBOTS, image } from "@/shared/metadata";
import { Metadata } from "next";


const META = {
  title: "Активация аккаунта",
  description:
    "Активация аккаунта",
};

export const metadata: Metadata = {
  ...META,
  robots: DISABLED_ROBOTS,
  openGraph: {
    ...META,
    images: image,
  }
};


const Page = async ({ params }: { params: Promise<{ token: string }> }) => {
  const { token } = await params;

  return <ActivateScreen token={token} />;
};

export default Page;
