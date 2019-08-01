import React, { Component } from "react";
import CocktailList from "./CocktailList";
import "./Form.css";

class SearchRandom extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: "",
      drinks: []
    };
  }

  //search random cocktail
  handleSubmitRandom = event => {
    event.preventDefault();
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }));
  };

  render() {
    const { drinks, name, loading } = this.state;

    const filteredCocktails = drinks.filter(cocktail => {
      return cocktail.strDrink.toLowerCase().includes(name.toLowerCase());
    });

    return (
      <div className="form">
        <h3>Search random cocktail</h3>
        <form onSubmit={this.handleSubmitRandom}>
          <button className="button">Search!</button>
        </form>
        {loading ? "Loading..." : <CocktailList cocktail={filteredCocktails} />}
      </div>
    );
  }
}

export default SearchRandom;
