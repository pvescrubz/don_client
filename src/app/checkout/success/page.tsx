import { CheckoutSuccessScreen } from "@/screens/CheckoutSuccess.screen";
import { DISABLED_ROBOTS, image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Ваш платеж принят!",
  description:
    "",
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
  return <CheckoutSuccessScreen />;
};

export default Page;
