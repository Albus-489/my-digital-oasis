import React from "react";
import "../styles/searchGames.style.css";
import { SearchGamesProps, fetchGameImageProps } from "./TierCompProps";
import { fetchGameImage } from "../funcs/axiosHelper";

const SearchGames: React.FC<SearchGamesProps> = ({
  isLoading,
  setIsLoading,
  gameSearchName,
  tiers,
  setTierList,
  setGameSearch,
}) => {
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
              onClick={() =>
                fetchGameImage({
                  setIsLoading,
                  gameSearchName,
                  tiers,
                  setTierList,
                })
              }
              className="findGameBtn btn btn-primary"
              type="button"
            >
              {isLoading ? (
                <div className="spinner-border spinner-border-sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              ) : (
                <div>Find</div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchGames;
