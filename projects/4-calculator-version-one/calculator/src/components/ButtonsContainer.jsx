import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = () => {
  const buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonList.map((item) => (
        <button key={item} className={styles.kgButton}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
