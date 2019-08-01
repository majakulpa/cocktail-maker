import React from "react";
import "./Main.css";
import drink from "./../img/drink.jpeg";
import drink2 from "./../img/drink2.jpeg";
import drink3 from "./../img/drink3.jpeg";
import drink4 from "./../img/drink4.jpeg";
import drink5 from "./../img/drink5.jpeg";
import drink6 from "./../img/drink6.jpeg";
import drink7 from "./../img/drink7.jpeg";
import drink8 from "./../img/drink8.jpeg";

const Main = () => {
  return (
    <div className="main">
      <img src={drink} alt="cocktail" />
      <img src={drink2} alt="cocktail" />
      <img src={drink3} alt="cocktail" />
      <img src={drink4} alt="cocktail" />
      <img src={drink5} alt="cocktail" />
      <img src={drink6} alt="cocktail" />
      <img src={drink7} alt="cocktail" />
      <img src={drink8} alt="cocktail" />
    </div>
  );
};
export default Main;
