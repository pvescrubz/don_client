import Skins from "@/shared/components/sections/Skins/Skins";
import { SkinsDescr } from "@/shared/components/sections/SkinsDescr/SkinsDescr";
import { TQuery } from "@/shared/typing/query.type";
import { FC } from "react";

interface ISkinksScreen {
  game: string;
  query: TQuery;
  isMobile: boolean;
}

export const SkinsScreen: FC<ISkinksScreen> = ({ game, query, isMobile }) => {
  return (
    <>
      <Skins game={game} query={query} isMobile={isMobile} />
      <SkinsDescr game={game} />
    </>
  );
};
