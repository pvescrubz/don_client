import { ReferalScreen } from "@/screens/Referal.screen";
import { image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Реферальная программа | DonViche",
  description:
    "Реферальная программа | DonViche",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  }
};


const Page = () => {
  return <ReferalScreen />;
};

export default Page;
