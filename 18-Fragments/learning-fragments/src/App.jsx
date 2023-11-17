import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";
const App = () => {
  // const foodItems = ["Dal", "Green Vegetables", "Curd", "Roti", "Rice"];
  // const foodItems = [];
  // let textStateArr = useState("Food Item Entered by user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  let [textToShow, setTextState] = useState("Food Item Entered by user");
  let [foodItems, setFoodItems] = useState(["Dal", "Green Vegetables", "Curd"]);

  const handleOnChange = (event) => {
    // console.log(event);
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className={`display-6 ${styles.kgTitle}`}>Healty Food Items</h1>
        <Foodinput handleOnChange={handleOnChange} />
        {/* {textToShow} */}
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
};

export default App;
