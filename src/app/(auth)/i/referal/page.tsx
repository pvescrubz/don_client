import { ReferalScreen } from "@/screens/Referal.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Реферальная программа | DonViche",
  description: "Реферальная программа | DonViche",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  robots: DISABLED_ROBOTS,
};

const Page = () => {
  return <ReferalScreen />;
};

export default Page;
