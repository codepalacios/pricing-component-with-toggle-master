import React from "react";
import { PricingProvider } from "../../context/PricingContext";
import { PricingPlans } from "../../components/PricingPlans/PricingPlans";
import { PricingCards } from "../../components/PricingCards/PricingCards";
import "./App.css";

function App() {
  return (
    <PricingProvider>
      <main>
        <PricingPlans />
        <PricingCards />
      </main>
    </PricingProvider>
  );
}

export default App;
