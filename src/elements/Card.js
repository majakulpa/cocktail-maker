import React, { Component } from "react";
import CocktailList from "./CocktailList";
import "./Card.css";
import "./List.css";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      name: "",
      image: "",
      drinks: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
      this.props.name
    }`;
    //console.log(url);
    this.setState({ loading: true });
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, drinks: data.drinks }));
  };

  render() {
    const { drinks, loading } = this.state;

    const filteredCocktails = drinks.filter(cocktail => {
      return cocktail.strDrink
        .toLowerCase()
        .includes(this.props.name.toLowerCase());
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button className="btn">
            {" "}
            <div className="card-by-ingredient">
              {this.props.name} <p>Click to see recipe!</p>
            </div>
          </button>
        </form>
        {loading ? "Loading..." : <CocktailList cocktail={filteredCocktails} />}
      </div>
    );
  }
}

export default Card;
