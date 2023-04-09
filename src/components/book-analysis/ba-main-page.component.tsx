import { log } from "console";
import React, { useEffect, useState } from "react";
import { createBook } from "./funcs/createBook";
import { Book } from "./models/Books";
import { IBook } from "./models/interfaces/IBook";
import "./styles/books-row.css";
import BooksRow from "./components/books-row.component";
import ModalComponent from "./components/modal.component";
const boockCover = require("./images/bookCover.png");

const BookAnalysisMainPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const logs = () => {
    const b = new Book("Aboba");
    const notes = b.getFullNotes();
    console.log(notes);
  };

  const testCreateBook = (newBook: IBook) => {
    let tmpBook = [...books];
    tmpBook.unshift(newBook);
    setBooks(tmpBook);
  };
  return (
    <div className="wrapper">
      {/* BOOKS ROW */}
      <BooksRow books={books} />

      {/* MODAL */}
      <ModalComponent books={books} setBooks={setBooks} />
    </div>
  );
};

export default BookAnalysisMainPage;
