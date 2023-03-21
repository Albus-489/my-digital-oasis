import ITierList from "../models/ITierList";
import { saveAs } from "file-saver";

export const downloadFile = (list: ITierList[]): void => {
  const fileData = "This is some example text that will be saved to a file.";
  const fileName = "example.txt";
  const file = new Blob([fileData], { type: "text/plain;charset=utf-8" });
  saveAs(file, fileName);
};
