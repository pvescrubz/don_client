import { OrdersScreen } from "@/screens/Orders.screen";
import { image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Заказы | DonViche",
  description:
    "Заказы | DonViche",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  }
};

const Page = () => {
  return <OrdersScreen/>;
};

export default Page;
