import { Bloggers } from "@/shared/components/sections/Blogers/Blogers";
import { BuySkinsHome } from "@/shared/components/sections/BuySkins/BuySkins";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { Hero } from "@/shared/components/sections/Hero/Hero";
import { Statistic } from "@/shared/components/sections/Statistics/Statistics";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <RedContainer>
        <BuySkinsHome />
        <Statistic />
        <Bloggers />
      </RedContainer>
      <Faq />
    </>
  );
};
export default HomePage;
