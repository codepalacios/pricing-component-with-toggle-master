import React from "react";
import { PricingContext } from "../../context/PricingContext";
import { Cards } from "../Cards/Cards";
import "./PricingCards.css";

function PricingCards() {
  const { plansData } = React.useContext(PricingContext);

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
