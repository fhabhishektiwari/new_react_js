import styles from "./Button.module.css";
const Button = ({ text, className }) => {
  return (
    <button className={`${styles["custom-btn"]} ${className}`}>{text}</button>
  );
};

export default Button;
