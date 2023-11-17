import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import styles from "./App.module.css";
import Container from "./components/Container";
const App = () => {
  const foodItems = ["Dal", "Green Vegetables", "Curd", "Roti", "Rice"];
  // const foodItems = [];

  return (
    <>
      <Container>
        <h1 className={`display-6 ${styles.kgTitle}`}>Healty Food Items</h1>
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container>
    </>
  );
};

export default App;
