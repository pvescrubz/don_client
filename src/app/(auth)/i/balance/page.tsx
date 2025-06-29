import { AccountBalanceScreen } from "@/screens/AccountBalance.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Баланс Аккаунта | DonViche",
  description: "Баланс Аккаунта | DonViche",
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
  return <AccountBalanceScreen />;
};

export default Page;
