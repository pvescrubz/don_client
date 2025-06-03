export interface ICatalogSkin {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  image: string;
  slug: string;
  killCounter?: IKillCounter;
  souvenir?: TSouvenir;
  game: {
    name: string;
  };
}

export interface IKillCounter {
  id: string;
  name: string;
  ruName: string;
  groupName: string;
  flag: boolean;
}

export type TSouvenir = IKillCounter;

export interface IMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
}

export type TCatalogRes = {
  data: ICatalogSkin[];
  meta: IMeta;
};

export interface ISkinBase {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  image: string;
  slug: string;
  description: string[];
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
}

export type TSkin = ISkinBase & ISpecifically;
