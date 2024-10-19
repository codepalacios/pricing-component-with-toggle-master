import React from "react";
import { PricingContext } from "../../context/PricingContext";
import { Cards } from "../Cards/Cards";
import "./PricingCards.css";

// Creating the component for pricing plan cards
function PricingCards() {
  // Using context to get pricing plans data
  const { plansData } = React.useContext(PricingContext);

  // Returning the component with the pricing plans cards
  return (
    <section className="pricing-cards">
      {plansData.map((plan, index) => (
        <Cards
          key={index}
          plan={plan.plan}
          price={plan.price}
          storage={plan.storage}
          usersAllowed={plan.users_allowed}
          sendLimit={plan.send_limit}
        />
      ))}
    </section>
  );
}

export { PricingCards };
