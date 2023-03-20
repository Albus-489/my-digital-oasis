import React from "react";
import "../styles/tier.style.css";
import { TierProps } from "./TierCompProps";

const Tier: React.FC<TierProps> = ({
  tiers,
  setTierList,
  name,
  items,
  onDragStart,
  onDragOver,
  onDrop,
  tierIndex,
}) => {
  return (
    <div
      className="tierContainer mb-2 mt-2 row flex-row"
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, tierIndex, tiers, setTierList)}
    >
      <div className="label-holder col-1">
        <h2>{name}</h2>
      </div>
      <div className="tier p-2 col-11">
        {items.map((item) => (
          <div
            className="item"
            key={item.name}
            draggable
            onDragStart={(event) => onDragStart(event, item.name)}
          >
            <img
              title={item.name}
              className="itemImage"
              src={item.image}
              alt={item.name}
            />
            <p className="itemName">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tier;
