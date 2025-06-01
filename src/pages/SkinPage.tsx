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
    </>
  );
};
export default SkinPage;
