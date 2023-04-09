import { log } from "console";
import React, { useEffect, useState } from "react";
import ModalComponent from "./components/modal.component";
import { createBook } from "./funcs/createBook";
import { Book } from "./models/Books";
import { IBook } from "./models/interfaces/IBook";
import "./styles/books-row.css";
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
      <div className="books-row">
        {books.map((book, index) => (
          <div className="card bg-dark" key={index}>
            <img
              id="book-image"
              src={boockCover}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <a href="#" className="btn btn-primary">
                Open
              </a>
            </div>
          </div>
        ))}
        <div className="addNewBAbox">
          <span
            className="addNewBAtext"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            + Add
          </span>
        </div>
      </div>

      {/* MODAL */}
      <ModalComponent books={books} setBooks={setBooks} />
    </div>
  );
};

export default BookAnalysisMainPage;
