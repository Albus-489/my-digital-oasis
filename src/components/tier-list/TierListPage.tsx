import { useState } from "react";
import ITierList from "./models/ITierList";
import "./styles/tierlist.style.css";
import Tier from "./tier-components/Tier.component";
import Pool from "./tier-components/Pool.component";
import { IBaseItem } from "./tier-components/TierCompProps";
import { downloadFile } from "./funcs/save-upload-tier.functions";

const TierListPage = () => {
  const [tiers, setTierList] = useState<ITierList[]>([
    { name: "S", items: [] },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
    { name: "Pool", items: [] },
  ]);
  const [searchList, setSearchList] = useState<IBaseItem[]>([]);
  const [gameSearchName, setGameSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="TierList">
      <button onClick={() => downloadFile}>Download File</button>
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
              searchList={searchList}
              setSearchList={setSearchList}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setGameSearch={setGameSearch}
              gameSearchName={gameSearchName}
              tierIndex={index}
              {...tier}
            />
          </div>
        )
      )}
    </div>
  );
};

export default TierListPage;
