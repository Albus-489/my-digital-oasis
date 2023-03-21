import ITierList from "../models/ITierList";
import { saveAs } from "file-saver";

export const downloadFile = (list: ITierList[]): void => {
  const jsonData: string = JSON.stringify(list);
  const blob = new Blob([jsonData], { type: "application/json" });
  saveAs(blob, "tierList.json");
};

export const uploadFile = (list: string): void => {};
