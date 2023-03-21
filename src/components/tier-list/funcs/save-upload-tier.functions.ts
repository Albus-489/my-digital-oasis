import ITierList from "../models/ITierList";
import { saveAs } from "file-saver";
import ITier from "../../test/models/ITier";

export const downloadFile = (list: ITierList[]): void => {
  const jsonData: string = JSON.stringify(list);
  const blob = new Blob([jsonData], { type: "application/json" });
  saveAs(blob, "tierList.json");
};

export const uploadFile = (
  event: React.ChangeEvent<HTMLInputElement>,
  setTierList: React.Dispatch<React.SetStateAction<ITier[]>>
): void => {
  const file = event.target.files?.[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result as string) as ITierList[];
        setTierList(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    reader.readAsText(file);
  }
};
