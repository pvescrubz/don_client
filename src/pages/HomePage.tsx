import { Bloggers } from "@/shared/components/sections/Blogers/Blogers";
import { BuySkinsHome } from "@/shared/components/sections/BuySkins/BuySkins";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { Hero } from "@/shared/components/sections/Hero/Hero";
import { Statistic } from "@/shared/components/sections/Statistics/Statistics";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";
import { FC } from "react";
interface IHomePage {
  platform: string;
}

export const HomePage: FC<IHomePage> = ({ platform }) => {

  console.log({platform})
  return (
    <>
      <Hero />
      <RedContainer>
        <BuySkinsHome />
        <Statistic />
        <Bloggers />
      </RedContainer>
    <Faq platform={platform} />
   
    </>
  );
};
export default HomePage;
