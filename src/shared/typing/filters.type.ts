export interface IFilter {
  id: string;
  name: string;
  ruName?: string;
  data?: IFilter[];
}

export interface ICaregory {
  id: string;
  name: string;
  ruName?: string;
  data: ICaregoryItem[];
}

export interface ICaregoryItem {
  id: string;
  name: string;
  ruName: string;
  type: ITypeData[];
}

export interface ITypeData {
  id: string;
  name: string;
  previewSkinId: string;
  previewSkin: IPreviewSkinData;
}
export interface IPreviewSkinData {
  image: string;
  imageUrl: string;
}
