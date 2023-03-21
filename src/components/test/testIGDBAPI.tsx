import React, { useEffect, useState } from "react";
import axios from "axios";
import user_secrets from "../tier-list/data/IGDBauth.json";
import ITierList from "../tier-list/models/ITierList";
import Tier from "./tst-components/Tier.component";
import Pool from "./tst-components/Pool.component";
const pepeImage = require("../tier-list/images/penumbra.jpg");

const TestPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    {
      name: "S",
      items: [
        { name: "Dark Souls I", image: pepeImage },
        { name: "Dark Souls II", image: pepeImage },
        { name: "Dark Souls III", image: pepeImage },
      ],
    },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
    {
      name: "Pool",
      items: [
        { name: "Doom I", image: pepeImage },
        { name: "Doom II", image: pepeImage },
        { name: "Doom III", image: pepeImage },
      ],
    },
  ]);

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    name: string
  ) => {
    event.dataTransfer?.setData("text/plain", name);
    console.log("Drag started", name);
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const onDrop = (
    event: React.DragEvent<HTMLDivElement>,
    tierIndex: number
  ) => {
    const itemName = event.dataTransfer?.getData("text"); //which item was selected
    const originTierIndex = tiers.findIndex((tier) =>
      tier.items.some((item) => item.name === itemName)
    ); // index of origin tier

    if (originTierIndex !== -1) {
      const updatedTiers = [...tiers]; // copy the array

      const item = updatedTiers[originTierIndex].items.find(
        (item) => item.name === itemName
      ); // find the item that will be moved

      updatedTiers[originTierIndex].items = updatedTiers[
        originTierIndex
      ].items.filter((item) => item.name !== itemName); // remove the item from the origin array

      updatedTiers[tierIndex].items.unshift(item!); // add the item to the destination array
      setTierList(updatedTiers); // update the state
    }

    console.log(originTierIndex);
  };

  return (
    <div className="TierList">
      {tiers.map((tier, index) =>
        tier.name !== "Pool" ? (
          <Tier
            name={tier.name}
            items={tier.items}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            tierIndex={index}
          />
        ) : (
          <Pool
            name={tier.name}
            items={tier.items}
            onDragStart={onDragStart}
            onDragOver={onDragOver}
            onDrop={onDrop}
            tierIndex={index}
          />
        )
      )}
    </div>
  );
};

export default TestPage;
