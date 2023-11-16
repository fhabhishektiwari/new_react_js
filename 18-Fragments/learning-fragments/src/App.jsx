import React from "react";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import "./App.css";
const App = () => {
  const foodItems = ["Dal", "Green Vegetables", "Curd", "Roti", "Rice"];
  // const foodItems = [];

  return (
    <React.Fragment>
      <h1 className="display-6 kg-title">Healty Food Items</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
};

export default App;
