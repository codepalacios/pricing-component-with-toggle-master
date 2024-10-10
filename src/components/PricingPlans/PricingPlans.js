import React, { useState } from "react";
import { PricingContext } from "../../context/PricingContext";
import "./PricingPlans.css";

function PricingPlans() {
  const { handleChangePaymentFrequency } = React.useContext(PricingContext);
  const [checked, setChecked] = useState(true);

  function handleCheckboxChange() {
    setChecked(!checked);
    handleChangePaymentFrequency();
  }

  return (
    <section className="pricing-plans">
      <h1 className="pricing-plans__title">Our Pricing</h1>
      <div className="pricing-plans__container">
        <span className="container__anually">Anually</span>
        <div className="container__switch">
          <label className="switch__label">
            <input
              className="switch__checkbox"
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="switch__slider switch__round"></span>
          </label>
        </div>
        <span className="container__monthly">Monthly</span>
      </div>
    </section>
  );
}

export { PricingPlans };
