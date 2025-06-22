import { OrdersScreen } from "@/screens/Orders.screen";
import { DISABLED_ROBOTS, OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Заказы | DonViche",
  description: "Заказы | DonViche",
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
  return <OrdersScreen />;
};

export default Page;
