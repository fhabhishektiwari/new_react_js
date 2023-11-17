import styles from "./Item.module.css";
const Item = ({ foodItems, handleBuyButton }) => {
  // const handleBuyButtonClicked = (event) => {
  //   console.log(event);
  //   console.log(`${foodItems} being bought`);
  // };

  return (
    <li className={`list-group-item ${styles.kgItems}`}>
      <span className={styles.kgText}>{foodItems}</span>
      <button
        className="btn btn-info"
        // onClick={(event) => handleBuyButtonClicked(event)}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
