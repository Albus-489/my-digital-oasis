import React, { DragEvent, FC, useEffect, useState } from "react";
import ITierList from "./models/ITierList";
import data from "./data/items.json";
import "./styles/tierlist.component.css";
const pepeImage = require("./images/pepestare.jpg");

const TierListPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    { name: "S", items: [] },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
    { name: "Pool", items: [] },
  ]);

  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    let _data = data.games;
    let updatedPool = [...tiers];

    updatedPool[5].items = _data.map((name) => ({ name, image: pepeImage }));
    setTierList(updatedPool);
    console.log(updatedPool);
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
    const originTierIndex = tiers.findIndex((tier) =>
      tier.items.some((item) => item.name === itemName)
    ); // index of origin tier

    const itemsPoolIndex = items.indexOf(itemName); // index of item

    if (originTierIndex !== -1) {
      const updatedTiers = [...tiers]; // copy the array

      const item = updatedTiers[originTierIndex].items.find(
        (item) => item.name === itemName
      ); // find the item that will be moved

      updatedTiers[originTierIndex].items = updatedTiers[
        originTierIndex
      ].items.filter((item) => item.name !== itemName); // remove the item from the origin array

      updatedTiers[tierIndex].items.push(item!); // add the item to the destination array
      setTierList(updatedTiers); // update the state
    }

    if (itemsPoolIndex !== -1) {
      const updatedTiers = [...tiers]; // copy the array
    }

    console.log(itemsPoolIndex);
  };

  return (
    <div>
      <h2>Tier List</h2>
      <div className="tiers">
        {tiers.map((tier, tierIndex) =>
          tierIndex !== 5 ? (
            <div
              key={tier.name}
              className="tier"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => onDrop(event, tierIndex)}
            >
              <h3>{tier.name}</h3>
              <ul>
                {tier.items.map((item) => (
                  <div
                    key={item.name}
                    draggable
                    onDragStart={(event) => onDragStart(event, item.name)}
                  >
                    {item.name}
                    <img src={item.image} alt="" />
                  </div>
                ))}
              </ul>
            </div>
          ) : null
        )}
      </div>

      <div className="itemsPool">
        <h3>Pool</h3>
        <div className="row flex-row row-cols-6">
          {tiers[5].items.map((item, index) => (
            <div className="col" key={index}>
              <img src={item.image} alt="" />
              <div
                key={index}
                draggable
                onDragStart={(event) => onDragStart(event, item.name)}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TierListPage;
