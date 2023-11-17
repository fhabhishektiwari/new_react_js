import styles from "./Foodinput.module.css";
const Foodinput = ({handleOnChange}) => {
  // const handleOnChange = (event) => {
  //   // console.log(event);
  //   console.log(event.target.value);
  // };
  return (
    <input
      type="text"
      placeholder="Enter food items"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default Foodinput;
