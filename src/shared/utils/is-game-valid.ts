export const isGameValid = (game: string): boolean => {
  const validGames = ["cs2", "rust", "dota2"];

  return validGames.includes(game);
};
