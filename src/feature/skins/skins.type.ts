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

export interface ISpecificallySKinCs {
  category?: ISpecificallyField;
  quality?: ISpecificallyField;
  rarity?: ISpecificallyField;
  phase?: ISpecificallyField;
  killCounter?: ISpecificallyField;
  souvenir?: ISpecificallyField;
}
export interface ISpecificallySKinDota {
  hero?: ISpecificallyField;
  slot?: ISpecificallyField;
}

export interface ISpecificallyField {
  id: string;
  name: string;
  ruName?: string;
  groupName: string;
}

export type TSkin = ISkinBase & ISpecificallySKinCs & ISpecificallySKinDota;
