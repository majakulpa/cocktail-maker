import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import SearchRandom from "./elements/SearchRandom";
import SearchIngredient from "./elements/SearchIngredient";
import SearchByName from "./elements/SearchByName";
import SearchByIngredient from "./elements/SearchByIngredient";
import Main from "./elements/Main";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <nav className="nav">
            <Link className="home" to="/">
              Home
            </Link>
          </nav>
          <h1>Cocktail Maker</h1>

          <div className="container">
            <Link className="container-link" to="/random/">
              <div className="container-card container-card-1">
                Select random cocktail
              </div>{" "}
            </Link>
            <Link className="container-link" to="/name/">
              <div className="container-card container-card-2">
                Search cocktail by name
              </div>
            </Link>
            <Link className="container-link" to="/byingredient/">
              <div className="container-card container-card-3">
                Search cocktails by ingredient name
              </div>
            </Link>
            <Link className="container-link" to="/ingredient/">
              <div className="container-card container-card-4">
                Search informations about ingredient
              </div>
            </Link>
          </div>
        </div>
        <Route path="/" exact component={Main} />

        <Route path="/random/" exact component={SearchRandom} />
        <Route path="/name/" component={SearchByName} />
        <Route path="/byingredient/" component={SearchByIngredient} />
        <Route path="/ingredient/" component={SearchIngredient} />
      </div>
    </Router>
  );
}
export default App;
