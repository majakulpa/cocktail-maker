import React from "react";
import CocktailCard from "./CocktailCard";
import "./List.css";

const CocktailList = ({ cocktail }) => {
  return (
    <div className="list">
      {cocktail.map((cocktail, idDrink) => {
        return (
          <CocktailCard
            key={idDrink}
            name={cocktail.strDrink}
            category={cocktail.strCategory}
            alcoholic={cocktail.strAlcoholic}
            glass={cocktail.strGlass}
            instructions={cocktail.strInstructions}
            image={cocktail.strDrinkThumb}
            ingredients={[
              `${cocktail.strMeasure1} ${cocktail.strIngredient1}`,
              `${cocktail.strMeasure2} ${cocktail.strIngredient2}`,
              `${cocktail.strMeasure3} ${cocktail.strIngredient3}`,
              `${cocktail.strMeasure4} ${cocktail.strIngredient4}`,
              `${cocktail.strMeasure5} ${cocktail.strIngredient5}`,
              `${cocktail.strMeasure6} ${cocktail.strIngredient6}`,
              `${cocktail.strMeasure7} ${cocktail.strIngredient7}`,
              `${cocktail.strMeasure8} ${cocktail.strIngredient8}`,
              `${cocktail.strMeasure9} ${cocktail.strIngredient9}`,
              `${cocktail.strMeasure10} ${cocktail.strIngredient10}`,
              `${cocktail.strMeasure11} ${cocktail.strIngredient11}`,
              `${cocktail.strMeasure12} ${cocktail.strIngredient12}`,
              `${cocktail.strMeasure13} ${cocktail.strIngredient13}`,
              `${cocktail.strMeasure14} ${cocktail.strIngredient14}`,
              `${cocktail.strIngredient15} ${cocktail.strMeasure15}`
            ]}
          />
        );
      })}
    </div>
  );
};

export default CocktailList;
