import React, { useEffect, useState } from "react";
import { createBook } from "./funcs/createBook";
import { Book } from "./models/Books";
import { IBook } from "./models/interfaces/IBook";
import "./styles/books-row.css";
import Button from "react-bootstrap/Button";
import BooksRow from "./components/books-row.component";
import ModalComponent from "./components/modal.component";
import getBooks from "./funcs/axios/getBooks";
const boockCover = require("./images/bookCover.png");

const BookAnalysisMainPage = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const logs = () => {
    const b = new Book("Aboba");
    const notes = b.getFullNotes();
    console.log(notes);
  };

  const testGetBook = async () => {
    const a = await getBooks();
    console.log(a);
  };
  return (
    <div className="wrapper">
      <Button
        onClick={() => testGetBook()}
        className="mt-5"
        size="lg"
        variant="primary"
      >
        GetBooks
      </Button>
      {/* BOOKS ROW */}
      <BooksRow books={books} />

      {/* MODAL */}
      <ModalComponent books={books} setBooks={setBooks} />
    </div>
  );
};

export default BookAnalysisMainPage;
