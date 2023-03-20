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
  searchList: { name: string; image: string }[];
  setSearchList: React.Dispatch<
    React.SetStateAction<{ name: string; image: string }[]>
  >;
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

  searchList: { name: string; image: string }[];
  setSearchList: React.Dispatch<
    React.SetStateAction<{ name: string; image: string }[]>
  >;
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
  searchList: { name: string; image: string }[];
  setSearchList: React.Dispatch<
    React.SetStateAction<{ name: string; image: string }[]>
  >;
};
