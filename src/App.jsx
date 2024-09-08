import Heading from "./components/Heading/Heading.jsx";
import Button from "./components/Button/Button.jsx";
import styles from "./App.module.css";
import style from "./components/Button/Button.module.css";

function App() {
  function printMikael() {
    console.log("Hello, my Name is Michael");
  }
  return (
    <div>
      <Button whenButtonisClicked={printMikael} label="Click Me" id="120" />
      <Button label="Submit" id="121" />
      <Heading />
      <h2 className="app_header">Hello</h2>
      <Heading />
      <h3>How are you doing?</h3>
      <Button label="Reset" id="200" />
      <Button item={[1, 2, 3, 4]} />
      <h2 className={`${style["click_button"]}`}>
        Learning how to use a JS Framework is fun
      </h2>
      <p className={`${styles["p"]} bg-green`}>
        Be relisilent is the key to becoming a good coder
      </p>
    </div>
  );
}

export default App;
