import axios from "axios";
import { IBook } from "../../models/interfaces/IBook";
const book_url = "http://localhost:8080/books";

export default async function getBooks(): Promise<IBook[]> {
  const response = await axios.get<IBook[]>(book_url);
  return response.data;
}
