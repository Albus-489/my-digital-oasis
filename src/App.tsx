import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import TierListPage from "./components/tier-list/TierListPage";
import HomePage from "./layout/HomePage";
import PlayerPage from "./components/player/Player";

function App() {
  return (
    <div className="App">
      <header className="container-fluid p-4">
        <div className="row">
          <div className="col">
            <div className="home">
              <a className="mylinks" href="/">
                {" "}
                Home
              </a>
            </div>
          </div>
          <div className="col">
            <div className="tierlist">
              <a className="mylinks" href="/tierlist">
                {" "}
                Tier-list
              </a>
            </div>
          </div>
          <div className="col">
            <div className="player">
              <a className="mylinks" href="/player">
                {" "}
                Player
              </a>
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tierlist" element={<TierListPage />} />
        <Route path="/player" element={<PlayerPage />} />
      </Routes>
    </div>
  );
}

export default App;
