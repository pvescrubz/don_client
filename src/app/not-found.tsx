import { NotFoundScreen } from "@/screens/NotFound.screen";
import { DISABLED_ROBOTS, image } from "@/shared/metadata";
import { Metadata } from "next";

const META = {
   title: "Страница не найдена (404) | DonViche",
  description: "Запрошенной страницы не существует. Вернитесь в магазин скинов CS2, Dota 2 и Rust.",
}

export const metadata: Metadata = {
  ...META,
  robots: DISABLED_ROBOTS,
  openGraph: {
    ...META,
    images: image,
  }
}


 const Page = () => {
  return <NotFoundScreen />;
};

export default Page;