import ITier from "../../test/models/ITier";
import ITierList from "../models/ITierList";
import { IBaseItem, ISimpleBaseItem } from "../tier-components/TierCompProps";

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

export const clearTier = (
  tiers: ITier[],
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
) => {
  const clearTiers: ITierList[] = [
    { name: "S", items: [] },
    { name: "A", items: [] },
    { name: "B", items: [] },
    { name: "C", items: [] },
    { name: "D", items: [] },
  ];
  clearTiers.push(tiers[5]);

  setTierList(clearTiers);
};
