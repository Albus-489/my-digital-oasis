import React, { DragEvent, useEffect, useState } from "react";
import ITierList from "./models/ITierList";
// import data from "./data/items.json";
import "./styles/tierlist.style.css";
import user_secrets from "./data/IGDBauth.json";
import axios from "axios";
import Tier from "./tier-components/Tier.component";
import Pool from "./tier-components/Pool.component";
const pepeImage = require("./images/penumbra.jpg");

const TierListPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    {
      name: "S",
      items: [
        { name: "Tier", image: pepeImage },
        { name: "Tier1", image: pepeImage },
        { name: "Tier2", image: pepeImage },
        { name: "Tier3", image: pepeImage },
        { name: "Tier4", image: pepeImage },
      ],
    },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
    { name: "Pool", items: [] },
  ]);
  const [gameSearchName, setGameSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function fetchGameImage(gameName: string) {
    setIsLoading(true);
    const fields: string = "cover.image_id";
    const limit: number = 1;
    const queryData: string = `search "${gameSearchName}"; fields ${fields}; limit ${limit};`;

    const response = await axios({
      url: "http://localhost:3001/api/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": user_secrets[0].apiKey,
        Authorization: user_secrets[0].token,
      },
      data: queryData,
    })
      .then((response) => {
        const imageId = response.data[0].cover.image_id;
        const imageURL = `https://images.igdb.com/igdb/image/upload/t_cover_big/${imageId}.jpg`;
        console.log(imageURL);

        const updatedPool = [...tiers];
        updatedPool[5].items.push({ name: gameName, image: imageURL });
        setTierList(updatedPool);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

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
      <h2 className="text-start mb-5 mt-3">Tier List</h2>
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
            isLoading={isLoading}
          />
        )
      )}
    </div>
  );
};

export default TierListPage;
