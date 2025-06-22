import { FAQScreen } from "@/screens/Faq.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { image } from "@/shared/metadata";
import { CONFIG } from "@/shared/model/config";

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
   alternates: {
        canonical: `${CONFIG.APP_BASE_URL}${APP_PAGES.FAQ}`, 
      },
};
const Page = () => {
  return <FAQScreen />;
};

export default Page;
