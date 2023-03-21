import ITier from "../../test/models/ITier";
import { IBaseItem, ISimpleBaseItem } from "../tier-components/TierCompProps";

export const onDragStart = (event: React.DragEvent, name: string) => {
  event.dataTransfer.setData("text/plain", name);
  console.log("Drag started", name);
};

export const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
  event.stopPropagation();
  event.preventDefault();
};

export const onDrop = (
  event: React.DragEvent<HTMLDivElement>,
  tierIndex: number,
  tiers: ITier[],
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
) => {
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

export const addToPool = (
  item: IBaseItem,
  tiers: ITier[],
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
) => {
  const newItem: ISimpleBaseItem = { name: item.name, image: item.image };

  const protoTier = [...tiers];
  protoTier[5].items.push(newItem);
  setTierList(protoTier);
};
