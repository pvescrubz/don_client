import { FAQScreen } from "@/screens/Faq.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { OG } from "@/shared/metadata";

import { Metadata } from "next";

const META = {
  title: "FAQ DonViche — Ответы на вопросы о скинах CS2, Dota 2 и Rust",
  description:
    "Частые вопросы о покупке, продаже и трейдинге скинов в CS2, Dota 2 и Rust. Безопасность, оплата, гарантии и поддержка.",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  alternates: {
    canonical: APP_PAGES.FAQ.slug,
  },
};

const Page = () => {
  return <FAQScreen />;
};

export default Page;
