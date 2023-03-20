import React from "react";
import "../styles/searchGame.style.css";

type SearchGamesProps = {};

const SearchGames: React.FC = () => {
  return (
    <div className="searchBox">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <div className="input-group-append">
          <button className="findGameBtn btn btn-primary" type="button">
            Find
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchGames;
