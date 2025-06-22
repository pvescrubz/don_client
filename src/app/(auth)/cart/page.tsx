import { CartScreen } from "@/screens/Cart.screen";
import { image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Корзина | DonViche",
  description:
    "",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  }
};
const Page = () => {
  return <CartScreen />;
};

export default Page;
