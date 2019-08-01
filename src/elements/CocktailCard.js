import React from "react";
import "./Card.css";

const CocktailCard = ({
  name,
  category,
  alcoholic,
  glass,
  instructions,
  image,
  ingredients
}) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className="card-text">
        <div>
          <h4>Category:</h4> <span>{category ? category : "unknown"}</span>
        </div>
        <div>
          <h4>Alcoholic:</h4> <span>{alcoholic ? alcoholic : "unknown"}</span>
        </div>
        <div>
          <h4>Glass:</h4> <span>{glass ? glass : "unknown"}</span>
        </div>
        <div>
          <h4>Instructions:</h4>
          <span>{instructions ? instructions : "unknown"}</span>
        </div>

        <div>
          <h4>Ingredients:</h4>
          {ingredients.map((ingredient, index) => {
            return ingredient !== " " && ingredient !== "null null" ? (
              <span key={index}>
                {ingredient} <br />
              </span>
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default CocktailCard;
