export type TierProps = {
  name: string;
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, tierIndex: number) => void;
  tierIndex: number;
};

export type SearchGamesProps = {
  isLoading: boolean;
  fetchGameImage: () => Promise<void>;
};

export type PoolItemsProps = {
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
};

export type PoolProps = {
  name: string;
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, tierIndex: number) => void;
  tierIndex: number;

  isLoading: boolean;
  fetchGameImage: () => Promise<void>;
  setGameSearch: React.Dispatch<React.SetStateAction<string>>;
};
