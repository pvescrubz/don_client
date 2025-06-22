import { NotFoundScreen } from "@/screens/NotFound.screen";
import { CONFIG } from "@/shared/model/config";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Страница не найдена (404) | DonViche",
  description: "Запрошенной страницы не существует. Вернитесь в магазин скинов CS2, Dota 2 и Rust.",

  
  robots: {
    index: false,
    follow: false, 
    nocache: true, 
    googleBot: {
      index: false,
      follow: false,
    }
  },


  openGraph: {
    title: "404 - DonViche | Магазин скинов CS2, Dota 2, Rust",
    description: "Страница не найдена. Перейдите на главную DonViche для покупки скинов.",
    images: [{
      url: `${CONFIG.APP_BASE_URL}/images/metabg.webp`,
      width: 1200,
      height: 630,
      alt: "404 DonViche",
    }]
  },

};

 const Page = () => {
  return <NotFoundScreen />;
};

export default Page;