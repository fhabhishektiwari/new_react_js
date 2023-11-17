import styles from "./Item.module.css";
const Item = ({ foodItems, bought, handleBuyButton }) => {
  return (
    <li className={`list-group-item ${styles.kgItems} ${bought && "active"}`}>
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
