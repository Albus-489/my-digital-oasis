import React from "react";
import { PoolItemsProps } from "./TierCompProps";

const PoolItems: React.FC<PoolItemsProps> = ({ items, onDragStart }) => {
  return (
    <div className="poolItemsRow d-flex">
      {items.map((item, index) => (
        <div
          className="poolItem"
          key={item.name + index}
          draggable
          onDragStart={(event) => onDragStart(event, item.name)}
        >
          <img src={item.image} alt={item.name} />
          {/* <p className="poolItemName">{item.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default PoolItems;
