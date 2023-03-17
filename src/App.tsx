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
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              yoUr DIgiTal OaSis
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/tierlist">
                    Tier-list
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="player">
                    Player
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Additional links
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tierlist" element={<TierListPage />} />
          <Route path="/player" element={<PlayerPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

{
  /* <div className="row">
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
        </div> */
}
