import React, { createContext, useState } from "react";
import PrecingPlanData from "../data/pricing-plans.json";

const PricingContext = createContext();

function PricingProvider({ children }) {
  const [paymentFrequency, setPaymentFrequency] = useState("monthly");
  const [plansData, setPlansData] = useState(
    PrecingPlanData.pricing[paymentFrequency]
  );

  function handleChangePaymentFrequency() {
    const newPaymentFrequency =
      paymentFrequency === "monthly" ? "annual" : "monthly";
    setPaymentFrequency(newPaymentFrequency);
    setPlansData(PrecingPlanData.pricing[newPaymentFrequency]);
  }

  return (
    <PricingContext.Provider
      value={{ plansData, handleChangePaymentFrequency }}
    >
      {children}
    </PricingContext.Provider>
  );
}

export { PricingContext, PricingProvider };
