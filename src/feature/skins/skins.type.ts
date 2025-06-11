export interface ISkinBase {
  id: string;
  name: string;
  priceRUB: string;
  priceEUR: string;
  priceUSD: string;
  priceKZT: string;
  imageUrl: string;
  image: string;
  slug: string;
  description?: string[];
}

export interface ICatalogSkin extends ISkinBase {
  killCounter?: ISpecificallyField;
  souvenir?: ISpecificallyField;
  game: {
    name: string;
  };
}

export interface IMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export interface ICatalogRes {
  data: ICatalogSkin[];
  meta: IMeta;
}

export interface ISpecifically {
  game?: ISpecificallyField;
  rarity?: ISpecificallyField;
  type?: ISpecificallyField;

  category?: ISpecificallyField;
  model?: ISpecificallyField;
  souvenir?: ISpecificallyField;
  killCounter?: ISpecificallyField;
  exterior?: ISpecificallyField;
  phase?: ISpecificallyField;

  quality?: ISpecificallyField;
  hero?: ISpecificallyField;
  slot?: ISpecificallyField;
}

export interface ISpecificallyField {
  id: string;
  name: string;
  ruName?: string;
  groupName: string;
  flag?: boolean;
}

export type TSkin = ISkinBase & ISpecifically;
