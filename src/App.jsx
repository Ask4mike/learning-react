import PricingCard from "./components/PricingCard/PricingCard.jsx";
import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.prices}>
      <PricingCard
        label="Start-Up"
        price="Free"
        image="/images/Start-up.png"
        imageAlt="A moving Bicycle with Clouds"
      />
      <PricingCard
        label="Pro"
        price="49$"
        duration="/Year"
        image="/images/Pro.png"
        imageAlt="A moving Car with Clouds"
      />
      <PricingCard
        label="Enterprise"
        price="99$"
        image="/images/Enterprise.png"
        imageAlt="A moving Plane with Clouds"
      />
    </div>
  );
}

export default App;
