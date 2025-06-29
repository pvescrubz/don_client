import { LastBuy } from "@/shared/components/sections/LastBuy/LastBuy";
import { Skin } from "@/shared/components/sections/Skin/Skin";
import { FC } from "react";

interface ISkinksScreen {
  game: string;
  slug: string;
}

export const SkinScreen: FC<ISkinksScreen> = ({ game, slug }) => {
  return (
    <>
      <Skin game={game} slug={slug} />
      <LastBuy />
    </>
  );
};
