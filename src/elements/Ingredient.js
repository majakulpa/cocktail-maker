import React from "react";
import IngredientCard from "./IngredientCard";

const Ingredient = ({ ingredient }) => {
  return (
    <div>
      <ul>
        {ingredient.map((ingredient, idIngredient) => {
          return (
            <IngredientCard
              key={idIngredient}
              name={ingredient.strIngredient}
              description={ingredient.strDescription}
              type={ingredient.strType}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Ingredient;
