import React from "react";
import Card from "./Card";
import "./List.css";

const List = ({ cocktail }) => {
  return (
    <div>
      <div className="form-container">
        {cocktail.map((cocktail, idDrink) => {
          return <Card key={idDrink} name={cocktail.strDrink} />;
        })}
      </div>
    </div>
  );
};

export default List;
