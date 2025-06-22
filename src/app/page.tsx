import { HomeScreen } from "@/screens/Home.screen";
import { CONFIG } from "@/shared/model/config";

import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
 

  return {
    title: "DonViche — Магазин скинов CS2, Dota 2 и Rust | Безопасные сделки",
    description:
      "Купить и продать скины CS2, Dota 2 и Rust с гарантией безопасности. Моментальные сделки, лучшие цены и защита от мошенников.",

    openGraph: {
      title: "DonViche — Магазин скинов CS2, Dota 2 и Rust",
      description:
        "Безопасная площадка для трейдинга игровых предметов. Честные цены, быстрые сделки и гарантия защиты.",
      url: CONFIG.APP_BASE_URL,
      type: "website",
      images: [
        {
          url: `${CONFIG.APP_BASE_URL}/images/metabg.webp`,
          width: 1200,
          height: 630,
          alt: "DonViche — магазин скинов CS:GO, Dota 2, Rust",
        },
      ],
      siteName: "DonViche",
    },
    alternates: {
      canonical: CONFIG.APP_BASE_URL,
    },
    keywords: [
      "купить скины CS2",
      "продать скины Dota 2",
      "Rust skins магазин",
      "трейдинг игровых предметов",
      "безопасные сделки скинами",
      "DonViche магазин",
      "скины CS:GO дешево",
      "моментальные выплаты за скины",
    ],
  };
}


const Page = () => {
  return <HomeScreen />;
};

export default Page;
