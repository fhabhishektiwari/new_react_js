import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";
const App = () => {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className={`display-6 ${styles.kgTitle}`}>Healty Food Items</h1>
        <Foodinput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
    </>
  );
};

export default App;
