import React from "react";
import "./Card.css";

const IngredientCard = ({ name, description, type }) => {
  return (
    <div className="card-ingredient">
      <div>
        <h3>{name}</h3>
        <div>
          <h4>Description:</h4>{" "}
          <span>{description ? description : "unknown"}</span>
        </div>
        <div>
          <h4>Type:</h4> <span>{type ? type : "unknown"}</span>
        </div>
      </div>
    </div>
  );
};

export default IngredientCard;
