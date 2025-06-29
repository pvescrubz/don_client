import { CheckoutErrorScreen } from "@/screens/CheckoutError.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Ошибка",
  description:
    "Свяжитесь с нашей службой поддержки! Мы решим проблему в кротчайшие сроки!",
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
  return <CheckoutErrorScreen />;
};

export default Page;
