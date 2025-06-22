import { BlogScreen } from "@/screens/BlogPosts.screen";
import { image } from "@/shared/metadata";
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
};

const Page = () => {
  return <BlogScreen />;
};

export default Page;
