import React from "react";
import "../styles/pool.style.css";
import PoolItems from "./PoolItems.component";
import SearchGames from "./SearchGames.component";
import { PoolProps } from "./TierCompProps";

const Pool: React.FC<PoolProps> = ({
  tiers,
  setTierList,
  name,
  items,
  onDragStart,
  onDragOver,
  onDrop,
  tierIndex,
  isLoading,
  fetchGameImage,
  setGameSearch,
}) => {
  return (
    <div
      className="poolBox"
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, tierIndex, tiers, setTierList)}
    >
      <div className="poolNameBox p-2">
        <h2 className="poolName text-center">{name}</h2>
      </div>
      <SearchGames
        isLoading={isLoading}
        fetchGameImage={fetchGameImage}
        setGameSearch={setGameSearch}
      />
      <PoolItems items={items} onDragStart={onDragStart} />
    </div>
  );
};

export default Pool;
