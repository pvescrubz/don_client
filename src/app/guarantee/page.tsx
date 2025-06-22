import { GuaranteeScreen } from "@/screens/Garantee.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { image } from "@/shared/metadata";
import { CONFIG } from "@/shared/model/config";


import { Metadata } from "next";

const META = {
  title: "Гарантии безопасности | DonViche — защита сделок со скинами CS2, Dota 2, Rust",
    description: "100% безопасность сделок при покупке и продаже скинов. Гарантия защиты от мошенников, честные цены и моментальные пополнения на DonViche.",

};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
    images: image,
  },
   alternates: {
        canonical: `${CONFIG.APP_BASE_URL}${APP_PAGES.GUARANTEE}`, 
      },
};

const Page = () => {
  return <GuaranteeScreen />;
};

export default Page;
