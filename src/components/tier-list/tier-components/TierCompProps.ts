import ITier from "../../test/models/ITier";

// ** Tier props
export type TierProps = {
  tiers: ITier[];
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>;
  name: string;
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (
    event: React.DragEvent<HTMLDivElement>,
    tierIndex: number,
    tiers: ITier[],
    setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
  ) => void;
  tierIndex: number;
};

// ** Search game props
export type SearchGamesProps = {
  isLoading: boolean;
  setGameSearch: React.Dispatch<React.SetStateAction<string>>;
  fetchGameImage: () => Promise<void>;
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
  name: string;
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (
    event: React.DragEvent<HTMLDivElement>,
    tierIndex: number,
    tiers: ITier[],
    setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
  ) => void;
  tierIndex: number;

  isLoading: boolean;
  fetchGameImage: () => Promise<void>;
  setGameSearch: React.Dispatch<React.SetStateAction<string>>;
};
