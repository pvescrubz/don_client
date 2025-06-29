import { BlogScreen } from "@/screens/BlogPosts.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { OG } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
  title: "Блог DonViche — Гайды, новости и обзоры на скины CS2, Dota 2 и Rust",
  description:
    "Читайте свежие статьи о скинах в CS2, Dota 2 и Rust. Обзоры, гайды по трейдину, прогнозы цен и эксклюзивные новости игрового рынка.",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  alternates: {
    canonical: APP_PAGES.BLOG.slug,
  },
};

const Page = () => {
  return <BlogScreen />;
};

export default Page;
