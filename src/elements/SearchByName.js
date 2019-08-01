import React, { Component } from "react";
import CocktailList from "./CocktailList";
import "./Form.css";

class SearchByName extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: "",
      drinks: []
    };
  }

  //send name of cocktail to search for it
  onChange = event => {
    this.setState({ name: event.target.value });
  };
  //search for cocktail by cocktail name
  handleSubmit = event => {
    event.preventDefault();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
      this.state.name
    }`;
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }))
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { drinks, name } = this.state;
    if (!drinks) {
      return (
        <div className="form">
          <h3>Search by cocktail name</h3>
          <form onSubmit={this.handleSubmit}>
            <input className="input" value={name} onChange={this.onChange} />
            <button className="button">Search!</button>
          </form>
          <p>Please provide valid cocktail name!</p>
        </div>
      );
    } else {
      const { drinks, name, loading } = this.state;
      const filteredCocktails = drinks.filter(cocktail => {
        return cocktail.strDrink.toLowerCase().includes(name.toLowerCase());
      });
      return (
        <div className="form">
          <h3>Search by cocktail name</h3>
          <form onSubmit={this.handleSubmit}>
            <input className="input" value={name} onChange={this.onChange} />
            <button className="button">Search!</button>
          </form>

          {loading ? (
            "Loading..."
          ) : (
            <CocktailList cocktail={filteredCocktails} />
          )}
        </div>
      );
    }
  }
}

export default SearchByName;
