import { Metadata } from "next";
import { NOT_FOUND } from ".";
import { isGameValid } from "../utils/is-game-valid";

export const generateMetadataSkins = (game: string): Metadata => {
  if (!isGameValid(game)) return NOT_FOUND;

  const gameNames: Record<string, string> = {
    cs2: "CS2 (Counter-Strike 2)",
    dota2: "Dota 2",
    rust: "Rust",
  };

  const readableGame = gameNames[game.toLowerCase()] || game;
  const META = {
    title: `Скины для ${readableGame} — купить по выгодной цене | Don Viche`,
    description: `Популярные скины для ${readableGame}: надёжные сделки, выгодные цены, быстрая доставка. Покупай скины без рисков на Don Viche.`,
  };

  return {
    ...META,
    openGraph: {
      ...META,
    },
    alternates: {
      canonical: `skins/${game}`,
    },
  };
};