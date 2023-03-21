import React from "react";
import { onDragOver, onDragStart, onDrop } from "../funcs/dragndropHelper";
import "../styles/pool.style.css";
import PoolItems from "./PoolItems.component";
import SearchGames from "./SearchGames.component";
import { PoolProps } from "./TierCompProps";

const Pool: React.FC<PoolProps> = (rest) => {
  return (
    <div
      className="poolBox"
      onDragOver={onDragOver}
      onDrop={(event) =>
        onDrop(event, rest.tierIndex, rest.tiers, rest.setTierList)
      }
    >
      <div className="poolNameBox p-2">
        {/* <h2 className="poolName text-center">{rest.name}</h2> */}
      </div>
      <div style={{ position: "relative" }}>
        <SearchGames {...rest} />
        <PoolItems items={rest.items} onDragStart={onDragStart} />
      </div>
    </div>
  );
};

export default Pool;
