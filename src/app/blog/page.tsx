import { BlogScreen } from "@/screens/BlogPosts.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { image } from "@/shared/metadata";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";

const META = {
  title: "Блог DonViche — Гайды, новости и обзоры на скины CS2, Dota 2 и Rust",
  description:
    "Читайте свежие статьи о скинах в CS2, Dota 2 и Rust. Обзоры, гайды по трейдину, прогнозы цен и эксклюзивные новости игрового рынка.",
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  },
   alternates: {
        canonical: `${CONFIG.APP_BASE_URL}${APP_PAGES.BLOG}`, 
      },
};

const Page = () => {
  return <BlogScreen />;
};

export default Page;
