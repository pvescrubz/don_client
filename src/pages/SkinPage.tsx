import { LastBuy } from "@/shared/components/sections/LastBuy/LastBuy";
import { Skin } from "@/shared/components/sections/Skin/Skin";
import { FC } from "react";

interface ISkinksPage {
  game: string;
  slug: string;
}

export const SkinPage: FC<ISkinksPage> = ({ game, slug }) => {
  return (
    <>
      <Skin game={game} slug={slug} />
      <LastBuy />
    </>
  );
};
export default SkinPage;