import { ISkinBase, ISpecificallyField } from "../skins/skins.type";

export interface ICartRes {
  id: string;
  total: string;
  itemsCount: number;
  skins: ICartSkin[];
}

export interface ICartSkin extends ISkinBase {
  rarity?: ISpecificallyField;
  exterior?: ISpecificallyField;
  game: ISpecificallyField;
}
