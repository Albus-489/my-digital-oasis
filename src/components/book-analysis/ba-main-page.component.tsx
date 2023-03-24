import { log } from "console";
import React, { useEffect, useState } from "react";
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
              <h5 className="card-title">Card title</h5>
              <a href="#" className="btn btn-primary">
                Open
              </a>
            </div>
          </div>
        ))}
        <div className="addNewBAbox">
          <span
            className="addNewBAtext"
            onClick={() => createBook(new Book("Name"), books, setBooks)}
          >
            + Add
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookAnalysisMainPage;
