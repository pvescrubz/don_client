
import Skins from "@/shared/components/sections/Skins/Skins";
import { SkinsHead } from "@/shared/components/sections/SkinsHead/SkinsHead";
import { Box } from "@/shared/components/ui/containers/Box/Box";
import { FC } from "react";

interface ISkinksPage {
  game: string;
  query: { [key: string]: string | undefined };
}

export const SkinksPage: FC<ISkinksPage> = ({ game, query }) => {
  return (
    <>
      <SkinsHead game={game} />
      <Skins game={game} query={query} />
      <Box>text</Box>
    </>
  );
};
export default SkinksPage;
