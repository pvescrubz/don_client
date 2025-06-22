import { HomeScreen } from "@/screens/Home.screen";
import { image } from "@/shared/metadata";
import { Metadata } from "next";


const META = {
  title: "DonViche | Купить скины CS2, Dota 2 и Rust | Безопасный трейдинг",
  description: "🚀 Безопасная покупка и продажа скинов CS:GO, Dota 2 и Rust с мгновенной доставкой. Лучшие цены на рынке, защита от мошенников и 24/7 поддержка.",
}

export const metadata: Metadata = {
  ...META,
  robots: {
  },
  openGraph: {
    ...META,
    images: image,
  }
}

const Page = () => {
  return <HomeScreen />;
};

export default Page;