import { BlogScreen } from "@/screens/BlogPosts.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
 

  return {
    title: "Блог DonViche — Гайды, новости и обзоры на скины CS2, Dota 2 и Rust",
    description:
      "Читайте свежие статьи о скинах в CS2, Dota 2 и Rust. Обзоры, гайды по трейдину, прогнозы цен и эксклюзивные новости игрового рынка.",

    openGraph: {
      title: "Блог DonViche — Гайды и новости о скинах CS2, Dota 2, Rust",
      description:
        "Актуальные статьи о скинах, трейдинге и рынке игровых предметов. Узнайте, как выгодно покупать и продавать скины.",
      url: `${CONFIG.APP_BASE_URL}/${APP_PAGES.BLOG}`,
      type: "website",
      images: [
        {
          url: `${CONFIG.APP_BASE_URL}/images/metabg.webp`,
          width: 1200,
          height: 630,
          alt: "DonViche Блог — скины CS:GO, Dota 2, Rust",
        },
      ],
      siteName: "DonViche",
    },
    alternates: {
      canonical: `${CONFIG.APP_BASE_URL}/${APP_PAGES.BLOG}`,
    },
    keywords: [
      "скины CS2",
      "трейдинг CS:GO",
      "гайды по скинам Dota 2",
      "Rust skins",
      "игровые предметы",
      "VIGAMES блог",
    ],
  };
}

const Page = () => {
  return <BlogScreen />;
};

export default Page;