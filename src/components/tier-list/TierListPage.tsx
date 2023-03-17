import React, { DragEvent, FC, useEffect, useState } from "react";
import ITierList from "./models/ITierList";
import data from "./data/items.json";

const TierListPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    { name: "S", items: ["Half-life", "Hollow Knight"] },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
  ]);

  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(data.games);
    // console.log(data.games);
  }, []);

  const onDragStart = (event: DragEvent, name: string) => {
    event.dataTransfer.setData("text/plain", name);
    console.log("Drag started", name);
  };

  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDrop = (event: DragEvent<HTMLDivElement>, tierIndex: number) => {
    const itemName = event.dataTransfer.getData("text"); //which item was selected
    const itemIndex = tiers.findIndex((tier) => tier.items.includes(itemName)); // index of the selected item

    if (itemIndex !== -1) {
      const updatedTiers = [...tiers]; // copy the array

      const item = updatedTiers[itemIndex].items.find(
        (item) => item === itemName
      ); // find the item that will be moved

      updatedTiers[itemIndex].items = updatedTiers[itemIndex].items.filter(
        (item) => item !== itemName
      ); // remove the item from the origin array

      updatedTiers[tierIndex].items.push(item!); // add the item to the destination array
      setTierList(updatedTiers); // update the state
    }
  };

  return (
    <div>
      <h2>Tier List</h2>
      <div className="tiers">
        {tiers.map((tier, tierIndex) => (
          <div
            key={tier.name}
            className="tier"
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event, tierIndex)}
          >
            <h3>{tier.name}</h3>
            <ul>
              {tier.items.map((item) => (
                <li
                  key={item}
                  draggable
                  onDragStart={(event) => onDragStart(event, item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="items">
        <div className="itemsPool">
          <div className="row flex-row">
            {items.map((item, index) => (
              <div className="col" key={index}>
                <li
                  key={index}
                  draggable
                  onDragStart={(event) => onDragStart(event, item)}
                >
                  {item}
                </li>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierListPage;
