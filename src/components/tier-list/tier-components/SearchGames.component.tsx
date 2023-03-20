import React, { useState } from "react";
import "../styles/searchGames.style.css";
import { SearchGamesProps, fetchGameImageProps } from "./TierCompProps";
import { fetchGameImage, fetchGameImages } from "../funcs/axiosHelper";

const SearchGames: React.FC<SearchGamesProps> = ({
  isLoading,
  setIsLoading,

  tiers,
  setTierList,

  gameSearchName,
  setGameSearch,

  searchList,
  setSearchList,
}) => {
  const [listIsActive, setListIsActive] = useState<boolean>(true);
  return (
    <div className="centered">
      <div className="searchBox col-md-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setGameSearch(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              onClick={() => {
                fetchGameImages({
                  setIsLoading,
                  gameSearchName,
                  searchList,
                  setSearchList,
                });

                setListIsActive(true);
              }}
              className="findGameBtn btn btn-primary"
              type="button"
            >
              {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <div>Search</div>
              )}
            </button>
          </div>
        </div>

        <div
          className="testArea col-md-12"
          style={listIsActive ? { display: "block" } : { display: "none" }}
        >
          <div className="closeBtnBox">
            {/* CLOSE TAB BUTTON */}
            <a
              onClick={() => setListIsActive(false)}
              id="closeTabBtn"
              type="button"
            >
              close tab
            </a>
          </div>
          {searchList.map((item, index) => (
            <div className="" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchGames;
