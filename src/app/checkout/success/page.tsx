import { CheckoutSuccessScreen } from "@/screens/CheckoutSuccess.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Ваш платеж принят!",
  description: "Платеж принят, ваша операция находится в обработке",
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
  return <CheckoutSuccessScreen />;
};

export default Page;
