import { AddBalanceFake } from "@/shared/components/sections/AddBalanceFake/AddBalanceFake";
import { BlogSlider } from "@/shared/components/sections/Blog/BlogSlider/BlogSlider";
import { Bloggers } from "@/shared/components/sections/Blogers/Blogers";
import { BuySkinsHome } from "@/shared/components/sections/BuySkins/BuySkins";
import { Faq } from "@/shared/components/sections/Faq/Faq";
import { Hero } from "@/shared/components/sections/Hero/Hero";
import { Statistic } from "@/shared/components/sections/Statistics/Statistics";
import { WeeklyProducts } from "@/shared/components/sections/WeeklyProducts/WeeklyProducts";
import { RedContainer } from "@/shared/components/ui/containers/RedContainer/RedContainer";
import { BlogConfig } from "@/shared/content/blog.config";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";

export const HomePage: FC = () => {
  const posts = Object.values(BlogConfig);
  return (
    <>
      <Hero />
      <RedContainer>
        <BuySkinsHome />
        <WeeklyProducts />
        <Statistic />
        <AddBalanceFake />
        <Bloggers />
        <BlogSlider posts={posts} />
      </RedContainer>

      <Faq platform={APP_PAGES.FAQ.slug} />
    </>
  );
};
export default HomePage;
