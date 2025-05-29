import Skins from "@/shared/components/sections/Skins/Skins";
import { SkinsHead } from "@/shared/components/sections/SkinsHead/SkinsHead";
import { Box } from "@/shared/components/ui/containers/Box/Box";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";


interface ISkinksPage {
  game: string;
  query: TQuery;
  isMobile: boolean;
}

export const SkinksPage: FC<ISkinksPage> = ({ game, query, isMobile }) => {
  return (
    <>
      <SkinsHead game={game} />
      <Skins game={game} query={query} isMobile={isMobile} />
      <Box>text</Box>
    </>
  );
};
export default SkinksPage;
