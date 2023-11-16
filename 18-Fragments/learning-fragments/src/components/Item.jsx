import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <li className={`list-group-item ${styles["kg-items"]}`}>
      <span className={styles["kg-text"]}>{foodItems}</span>
    </li>
  );
};

export default Item;
