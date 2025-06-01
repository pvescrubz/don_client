import { FC } from "react";

interface ISkinksPage {
  game: string;
  itemId: string;
}

export const SkinPage: FC<ISkinksPage> = ({ game, itemId }) => {
  return (
    <>
      {game} и {itemId}
      123
    </>
  );
};
export default SkinPage;
