import React, { useEffect, useState } from "react";
import ITierList from "./models/ITierList";
// import data from "./data/items.json";
import "./styles/tierlist.style.css";
import user_secrets from "./data/IGDBauth.json";
import axios from "axios";
import Tier from "./tier-components/Tier.component";
import Pool from "./tier-components/Pool.component";
import { onDragOver, onDragStart, onDrop } from "./funcs/dragndropHelper";
import { fetchGameImage } from "./funcs/axiosHelper";
const pepeImage = require("./images/penumbra.jpg");

const TierListPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    { name: "S", items: [] },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
    { name: "Pool", items: [] },
  ]);
  const [gameSearchName, setGameSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="TierList">
      <h2 className="text-start mb-5 mt-3">Tier List</h2>
      {tiers.map((tier, index) =>
        tier.name !== "Pool" ? (
          <div className="tier-row" key={index}>
            <Tier
              tiers={tiers}
              setTierList={setTierList}
              {...tier}
              tierIndex={index}
            />
          </div>
        ) : (
          <div className="pool-row" key={index}>
            <Pool
              tiers={tiers}
              setTierList={setTierList}
              {...tier}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              tierIndex={index}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setGameSearch={setGameSearch}
              gameSearchName={gameSearchName}
            />
          </div>
        )
      )}
    </div>
  );
};

export default TierListPage;
