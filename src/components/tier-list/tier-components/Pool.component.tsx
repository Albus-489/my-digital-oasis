import React from "react";
import "../styles/pool.style.css";
import PoolItems from "./PoolItems.component";
import SearchGames from "./SearchGame.component";

type TierProps = {
  name: string;
  items: { name: string; image: string }[];
  isLoading: boolean;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, tierIndex: number) => void;
  tierIndex: number;
};

const Pool: React.FC<TierProps> = ({
  name,
  items,
  onDragStart,
  onDragOver,
  onDrop,
  tierIndex,
  isLoading,
}) => {
  return (
    <div
      className="poolBox"
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, tierIndex)}
    >
      <div className="poolNameBox p-2">
        <h2 className="poolName text-center">{name}</h2>
      </div>
      <SearchGames />
      <PoolItems items={items} onDragStart={onDragStart} />
    </div>
  );
};

export default Pool;
