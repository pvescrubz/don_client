export type TCatalogSkin = {
  id: string;
  name: string;
  price: string;
  imageUrl: string;
  image: string;
  slug: string;
  killCounter?: TKillCounter;
  souvenir?: TSouvenir;
};

export type TKillCounter = {
  id: string;
  name: string;
  ruName: string;
  groupName: string;
  flag: boolean;
};

export type TSouvenir = TKillCounter;

export type TMeta = {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
};

export type TCatalogRes = {
  data: TCatalogSkin[];
  meta: TMeta;
};
