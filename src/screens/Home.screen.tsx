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
import { BlogConfig } from "@/shared/content/blog.config";
import { APP_PAGES } from "@/shared/dashboard/app.dashboard";
import { FC } from "react";

export const HomeScreen: FC = () => {
  const posts = Object.values(BlogConfig);

  return (
    <>
      <Hero />
      <RedContainer>
        <BuySkinsHome />
        <WeeklyProducts />
        <Statistic />
        <AddBalanceFake />
<<<<<<< HEAD:src/pages/HomePage.tsx
        <Bloggers />
       
      </RedContainer>
 <BlogSlider posts={posts} />
=======
      </RedContainer>
      <Reviews />
      <Bloggers />
>>>>>>> 7c434d5d03b50034ae5d25597be7674be27b6ee6:src/screens/Home.screen.tsx
      <Faq platform={APP_PAGES.FAQ.slug} />
      <BlogSlider posts={posts} />
    </>
  );
};
