import React, {
  DragEvent,
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import ITierList from "./models/ITierList";
import data from "./data/items.json";
import "./styles/tierlist.component.css";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import user_secrets from "./data/IGDBauth.json";
import axios from "axios";
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

  // const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    //let _data = data.games;
    let updatedPool = [...tiers];

    //updatedPool[5].items = _data.map((name) => ({ name, image: pepeImage }));
    setTierList(updatedPool);
  }, []);

  async function fetchGameImage(gameName: string) {
    const response = await axios({
      url: "http://localhost:3001/api/games",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Client-ID": user_secrets[0].apiKey,
        Authorization: user_secrets[0].token,
      },
      data: `fields name;`,
    });
    return response.data[0]?.name || null;
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

    // const itemsPoolIndex = items.indexOf(itemName); // index of item

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
    <div>
      <div className="row flex-row">
        <div style={{ border: "1px solid red" }} className="label-holder col-2">
          <span>S</span>
        </div>

        <div className="tire-row col-10" style={{ border: "2px solid white" }}>
          asd
        </div>
      </div>
      <div className="tiers">
        <h2 className="mt-4">Tier List</h2>
        {tiers.map((tier, tierIndex) =>
          tierIndex !== 5 ? (
            <div
              key={tier.name}
              className="tier m-4"
              onDragOver={(event) => onDragOver(event)}
              onDrop={(event) => onDrop(event, tierIndex)}
            >
              <h3>{tier.name}</h3>
              <ul>
                <div className="row flex-row flex-wrap justify-content-start">
                  {tier.items.map((item, index) => (
                    <div className="col" key={index}>
                      <div
                        key={item.name}
                        draggable
                        onDragStart={(event) => onDragStart(event, item.name)}
                      >
                        <div className="card" style={{ width: "8rem" }}>
                          <img
                            data-bs-toggle="popover"
                            title={item.name}
                            data-bs-content="And here's some amazing content. It's very engaging. Right?"
                            src={item.image}
                            className="card-img-top"
                            alt={item.name}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          ) : (
            <div className="itemsPool">
              <div
                key={tier.name}
                className="tier"
                onDragOver={(event) => onDragOver(event)}
                onDrop={(event) => onDrop(event, tierIndex)}
              >
                <h3 className="text-center">{tier.name}</h3>
                <div className="row flex-row justify-content-center">
                  <div className="col col-4">
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn btn-primary"
                        type="button"
                        id="button-addon2"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row flex-row row-cols-12">
                  {tier.items.map((item, index) => (
                    <div className="col" key={index}>
                      <div
                        key={index}
                        draggable
                        onDragStart={(event) => onDragStart(event, item.name)}
                      >
                        <img src={item.image} alt="" />
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TierListPage;
