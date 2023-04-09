import React from "react";
import { createBook } from "../funcs/createBook";
import { IBook } from "../models/interfaces/IBook";
import { Book } from "../models/Books";
const boockCover = require("../images/bookCover.png");

type BooksRowProps = {
  books: IBook[];
};

const BooksRow: React.FC<BooksRowProps> = ({ books }) => {
  return (
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
  );
};

export default BooksRow;
