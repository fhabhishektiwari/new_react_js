import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      let newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Calculator</h1>
          <div className={styles.calculator}>
            <Display displayValue={calVal} />
            <ButtonsContainer onButtonClick={onButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
