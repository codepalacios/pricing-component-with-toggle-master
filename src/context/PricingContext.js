import React, { createContext, useState } from "react";
import PrecingPlanData from "../data/pricing-plans.json";

// Creating the pricing context
const PricingContext = createContext();

// Creating the price provider
function PricingProvider({ children }) {
  // Creating the status for payment frequency
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  // Creating the state for pricing plans
  const [plansData, setPlansData] = useState(
    PrecingPlanData.pricing[paymentFrequency]
  );

  // Function to change the payment frequency
  function handleChangePaymentFrequency() {
    const newPaymentFrequency =
      paymentFrequency === "monthly" ? "annual" : "monthly";
    setPaymentFrequency(newPaymentFrequency);
    setPlansData(PrecingPlanData.pricing[newPaymentFrequency]);
  }

  // Returning the price provider
  return (
    <PricingContext.Provider
      value={{ plansData, handleChangePaymentFrequency }}
    >
      {children}
    </PricingContext.Provider>
  );
}

// Exporting context and provider
export { PricingContext, PricingProvider };
