import React from "react";
import { PricingProvider } from "../../context/PricingContext";
import { PricingPlans } from "../../components/PricingPlans/PricingPlans";
import { PricingCards } from "../../components/PricingCards/PricingCards";
import "./App.css";

// Creating the App component with the price provider
function App() {
  return (
    <PricingProvider>
      <main className="pricing-component">
        <PricingPlans />
        <PricingCards />
      </main>
    </PricingProvider>
  );
}

export default App;
