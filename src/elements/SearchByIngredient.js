import React, { Component } from "react";
import List from "./List";
import "./Form.css";

class SearchByIngredient extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: "",
      drinks: []
    };
  }
  //send name of ingredient to search by ingredient
  onChange = event => {
    this.setState({ name: event.target.value });
  };
  //search by ingredient
  handleSubmit = event => {
    event.preventDefault();

    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${
      this.state.name
    }`;
    //console.log(url);

    this.setState({ loading: true });

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }))
      .catch(error => {
        this.setState({ loading: false });
        alert("Please provide valid ingredient name!");
        console.log(error);
      });

    //console.log(this.state.drinks);
  };

  render() {
    const { drinks, loading, name } = this.state;

    return (
      <div className="form">
        <h3>Search cocktail by ingredient</h3>
        <form onSubmit={this.handleSubmit}>
          <input className="input" value={name} onChange={this.onChange} />
          <button className="button">Search!</button>
        </form>
        {loading ? "Loading..." : <List cocktail={drinks} />}
      </div>
    );
  }
}

export default SearchByIngredient;
