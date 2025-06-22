import { AccountBalanceScreen } from "@/screens/AccountBalance.screen";
import { image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Баланс Аккаунта | DonViche",
  description:
    "Баланс Аккаунта | DonViche",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  }
};


const Page = () => {
  return <AccountBalanceScreen />;
};

export default Page;
