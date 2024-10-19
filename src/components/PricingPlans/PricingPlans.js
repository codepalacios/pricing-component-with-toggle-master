import React, { useState } from "react";
import { PricingContext } from "../../context/PricingContext";
import "./PricingPlans.css";

// Creating the Pricing Plans Component
function PricingPlans() {
  const { handleChangePaymentFrequency } = React.useContext(PricingContext);
  const [checked, setChecked] = useState(true);

  // Function to change the status of the checkbox and change the payment frequency
  function handleCheckboxChange() {
    setChecked(!checked);
    handleChangePaymentFrequency();
  }

  // Returning the pricing plans component
  return (
    <section className="pricing-plans">
      <h1 className="pricing-plans__title">Our Pricing</h1>
      <div className="pricing-plans__container">
        <label className="container__anually" htmlFor="payment-frequency">
          Anually
        </label>
        <div className="container__switch">
          <label className="switch__label">
            <input
              className="switch__checkbox"
              type="checkbox"
              id="payment-frequency"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="switch__slider switch__round"></span>
          </label>
        </div>
        <label className="container__monthly" htmlFor="payment-frequency">
          Monthly
        </label>
      </div>
    </section>
  );
}

export { PricingPlans };
