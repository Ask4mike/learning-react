import PricingCard from "./components/PricingCard/PricingCard.jsx";
import "./global.css";

function App() {
  return (
    <div>
      <PricingCard
        label="Pro"
        priceLabel="49$ /Year"
        image="/images/Pro.png"
        imageAlt="A moving Car with Clouds"
      />
    </div>
  );
}

export default App;
