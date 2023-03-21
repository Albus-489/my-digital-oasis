import ITier from "../../test/models/ITier";

// ** Tier props
export type TierProps = {
  tiers: ITier[];
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>;
  name: string;
  items: { name: string; image: string }[];
  tierIndex: number;
};

// ** Pool items props
export type PoolItemsProps = {
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
};

// ** Pool props
export type PoolProps = {
  tiers: ITier[];
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  gameSearchName: string;
  setGameSearch: React.Dispatch<React.SetStateAction<string>>;
  searchList: IBaseItem[];
  setSearchList: React.Dispatch<React.SetStateAction<IBaseItem[]>>;
  name: string;
  items: { name: string; image: string }[];
  tierIndex: number;
};

// ** Search game props
export type SearchGamesProps = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;

  gameSearchName: string;
  setGameSearch: React.Dispatch<React.SetStateAction<string>>;

  tiers: ITier[];
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>;

  searchList: IBaseItem[];
  setSearchList: React.Dispatch<React.SetStateAction<IBaseItem[]>>;
};

// ** Axios fetc images
export type fetchGameImageProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  gameSearchName: string;
  tiers: ITier[];
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>;
};

export type fetchGameImagesProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  gameSearchName: string;
  searchList: IBaseItem[];
  setSearchList: React.Dispatch<React.SetStateAction<IBaseItem[]>>;
};

// ?? Items interface
export interface IBaseItem {
  name: string;
  summary: string;
  image: string;
  index: number;
}

export interface ISimpleBaseItem {
  name: string;
  image: string;
}
