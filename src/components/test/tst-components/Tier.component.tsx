import React from "react";

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
      className="tier"
      onDragOver={onDragOver}
      onDrop={(event) => onDrop(event, tierIndex)}
    >
      <h2>{name}</h2>
      {items.map((item) => (
        <div
          className="item"
          key={item.name}
          draggable
          onDragStart={(event) => onDragStart(event, item.name)}
        >
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tier;
