import { GuaranteeScreen } from "@/screens/Garantee.screen";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { OG } from "@/shared/metadata";

import { Metadata } from "next";

const META = {
  title:
    "Гарантии безопасности | DonViche — защита сделок со скинами CS2, Dota 2, Rust",
  description:
    "100% безопасность сделок при покупке и продаже скинов. Гарантия защиты от мошенников, честные цены и моментальные пополнения на DonViche.",
  images: OG,
};

export const metadata: Metadata = {
  ...META,
  openGraph: {
    ...META,
  },
  alternates: {
    canonical: APP_PAGES.GUARANTEE.slug,
  },
};

const Page = () => {
  return <GuaranteeScreen />;
};

export default Page;
