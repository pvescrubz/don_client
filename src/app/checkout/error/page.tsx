import { CheckoutErrorScreen } from "@/screens/CheckoutError.screen";
import { DISABLED_ROBOTS, image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Ошибка",
  description:
    "Свяжитесь с нашей службой поддержки!Мы решим проблему в кротчайшие сроки!",
};

export const metadata: Metadata = {
  ...META,
  robots: DISABLED_ROBOTS,
  openGraph: {
    ...META,
    images: image,
  }
}


const Page = () => {
  return <CheckoutErrorScreen />;
};

export default Page;
