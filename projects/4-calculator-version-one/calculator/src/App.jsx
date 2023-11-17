import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Calculator</h1>
          <div className={styles.calculator}>
            <Display />
            <ButtonsContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
