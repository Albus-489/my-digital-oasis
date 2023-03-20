import React from "react";
import "../styles/tier.style.css";

type TierProps = {
  name: string;
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (event: React.DragEvent<HTMLDivElement>, tierIndex: number) => void;
  tierIndex: number;
};

const Tier: React.FC<TierProps> = ({
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
      onDrop={(event) => onDrop(event, tierIndex)}
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
