import { FAQScreen } from "@/screens/Faq.screen";
import { image } from "@/shared/metadata";

import { Metadata } from "next";

const META = {
  title: "FAQ DonViche — Ответы на вопросы о скинах CS2, Dota 2 и Rust",
  description:
    "Частые вопросы о покупке, продаже и трейдинге скинов в CS2, Dota 2 и Rust. Безопасность, оплата, гарантии и поддержка.",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  },
};
const Page = () => {
  return <FAQScreen />;
};

export default Page;
