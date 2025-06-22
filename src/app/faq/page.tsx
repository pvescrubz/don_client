import { FAQScreen } from "@/screens/Faq.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";


import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const SITE_URL = process.env.SITE_URL || "https://donviche.com";

  return {
    title: "FAQ DonViche — Ответы на вопросы о скинах CS2, Dota 2 и Rust",
    description:
      "Частые вопросы о покупке, продаже и трейдинге скинов в CS2, Dota 2 и Rust. Безопасность, оплата, гарантии и поддержка.",

    openGraph: {
      title: "FAQ DonViche — Вопросы и ответы о скинах CS2, Dota 2, Rust",
      description:
        "Все, что нужно знать о работе с DonViche: как купить скины, методы оплаты, безопасность сделок и поддержка.",
      url: `${SITE_URL}/${APP_PAGES.FAQ}`,
      type: "website",
      images: [
        {
          url: `${SITE_URL}/images/metabg.webp`,
          width: 1200,
          height: 630,
          alt: "DonViche FAQ — помощь по скинам CS:GO, Dota 2, Rust",
        },
      ],
      siteName: "DonViche",
    },
    alternates: {
      canonical: `${SITE_URL}/${APP_PAGES.FAQ}`,
    },
    keywords: [
      "DonViche FAQ",
      "как купить скины CS2",
      "безопасный трейдинг",
      "оплата скинов",
      "поддержка DonViche",
      "гарантии при покупке",
      "скины Dota 2 вопросы",
      "Rust skins помощь",
    ],
  };
}
const Page = () => {
  return <FAQScreen />;
};

export default Page;
