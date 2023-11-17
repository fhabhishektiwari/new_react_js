import styles from "./Button.module.css";
import PropTypes from "prop-types";
const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`${styles["custom-btn"]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.array.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
