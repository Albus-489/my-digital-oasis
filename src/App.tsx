import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TierListPage from "./components/tier-list/TierListPage";
import HomePage from "./layout/HomePage";
import TestPage from "./components/test/testIGDBAPI";
import BookAnalysisMainPage from "./components/book-analysis/ba-main-page.component";

function App() {
  return (
    <div className="App">
      <header className="">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="navBox">
            <a className="navbar-brand" href="#">
              YDO
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
                  <a className="nav-link" href="bookanalysis">
                    BA
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
                    Contancts
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a
                        className="dropdown-item"
                        href="https://t.me/praise_the_sunnn"
                        target="_blank"
                      >
                        Telegram
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="mailto:bavrzar@gmail.com"
                      >
                        E-mail
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
          <Route path="/bookanalysis" element={<BookAnalysisMainPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
