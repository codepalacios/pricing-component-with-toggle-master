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
    <section>
      <h1>Our Pricing</h1>
      <div>
        <span>Anually</span>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <span className="slider round"></span>
          </label>
        </div>
        <span>Monthly</span>
      </div>
    </section>
  );
}

export { PricingPlans };
