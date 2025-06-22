import { GuaranteeScreen } from "@/screens/Garantee.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { CONFIG } from "@/shared/model/config";


import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  

  return {
    title: "Гарантии безопасности | DonViche — защита сделок со скинами CS2, Dota 2, Rust",
    description:
      "100% безопасность сделок при покупке и продаже скинов. Гарантия защиты от мошенников, честные цены и моментальные выплаты на DonViche.",

    openGraph: {
      title: "Гарантии безопасности сделок | DonViche",
      description:
        "Официальные гарантии при торговле скинами в CS2, Dota 2 и Rust. Безопасные транзакции и защита от обмана.",
      url: `${CONFIG.APP_BASE_URL}/${APP_PAGES.GUARANTEE}`,
      type: "website",
      images: [
        {
          url: `${CONFIG.APP_BASE_URL}/images/metabg.webp`,
          width: 1200,
          height: 630,
          alt: "DonViche Гарантии — безопасные сделки со скинами",
        },
      ],
      siteName: "DonViche",
    },
    alternates: {
      canonical: `${CONFIG.APP_BASE_URL}/${APP_PAGES.GUARANTEE}`,
    },
    keywords: [
      "гарантии DonViche",
      "безопасность трейдинга CS2",
      "защита от мошенников",
      "покупка скинов без риска",
      "честные сделки скинами",
      "моментальные выплаты Dota 2",
      "безопасный обмен Rust skins",
      "гарантия возврата DonViche",
    ],
  };
}

const Page = () => {
  return <GuaranteeScreen />;
};

export default Page;
