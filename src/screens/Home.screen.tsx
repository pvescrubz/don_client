import { AddBalanceFake } from "@/shared/components/sections/AddBalanceFake/AddBalanceFake";
import { BlogSlider } from "@/shared/components/sections/Blog/BlogSlider/BlogSlider";
import { Bloggers } from "@/shared/components/sections/Blogers/Blogers";
import { BuySkinsHome } from "@/shared/components/sections/BuySkins/BuySkins";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { Hero } from "@/shared/components/sections/Hero/Hero";
import { Reviews } from "@/shared/components/sections/Reviews/Reviews";
import { Statistic } from "@/shared/components/sections/Statistics/Statistics";
import { WeeklyProducts } from "@/shared/components/sections/WeeklyProducts/WeeklyProducts";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";

export const HomeScreen: FC = () => {
  return (
    <>
      <Hero />
      <RedContainer>
        <BuySkinsHome />
        <WeeklyProducts />
        <Statistic />
        <AddBalanceFake />
      </RedContainer>
      <Reviews />
      <Bloggers />

      <Faq platform={APP_PAGES.FAQ.slug} />
      <BlogSlider />
    </>
  );
};
