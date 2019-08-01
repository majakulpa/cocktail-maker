import React, { Component } from "react";

import Ingredient from "./Ingredient";
import "./Form.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      ingredientName: "",
      ingredients: []
    };
  }

  //send name of ingredient to search for info about it
  onChange = event => {
    this.setState({ ingredientName: event.target.value });
  };
  //search info about ingredient
  handleSubmit = event => {
    event.preventDefault();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${
      this.state.ingredientName
    }`;
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data =>
        this.setState({ loading: false, ingredients: data.ingredients })
      )
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { ingredients, ingredientName } = this.state;
    if (!ingredients) {
      return (
        <div className="form">
          <h3>Search ingredient</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              value={ingredientName}
              onChange={this.onChange}
            />
            <button className="button">Search!</button>
          </form>
          <p>Please provide valid ingredient name!</p>
        </div>
      );
    } else {
      const { loading, ingredientName, ingredients } = this.state;

      const filterIngredients = ingredients.filter(ingredient => {
        return ingredient.strIngredient
          .toLowerCase()
          .includes(ingredientName.toLowerCase());
      });

      return (
        <div className="form">
          <h3>Search informations about any alcohol!</h3>
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              value={ingredientName}
              onChange={this.onChange}
            />
            <button className="button">Search!</button>
          </form>
          {loading ? (
            "Loading..."
          ) : (
            <Ingredient ingredient={filterIngredients} />
          )}
        </div>
      );
    }
  }
}

export default App;
