import React from "react";

type PoolItemsProps = {
  items: { name: string; image: string }[];
  onDragStart: (event: React.DragEvent<HTMLDivElement>, name: string) => void;
};

const PoolItems: React.FC<PoolItemsProps> = ({ items, onDragStart }) => {
  return (
    <div className="poolItemsRow d-flex">
      {items.map((item) => (
        <div
          className="poolItem"
          key={item.name}
          draggable
          onDragStart={(event) => onDragStart(event, item.name)}
        >
          <img src={item.image} alt={item.name} />
          <p className="poolItemName">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PoolItems;
