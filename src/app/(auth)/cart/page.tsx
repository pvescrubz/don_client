import { CartScreen } from "@/screens/Cart.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Корзина | DonViche",
  description: "Корзина | DonViche",
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
  return <CartScreen />;
};

export default Page;
