import "./Cards.css";

// Creation of the cards component that contains the plan price data
function Cards({ plan, price, storage, usersAllowed, sendLimit }) {
  return (
    <article className="cards">
      <h2 className="cards__plan">{plan}</h2>
      <div className="cards__price-container">
        <p className="price-container__dollar">$</p>
        <p className="price-container__price">{price}</p>
      </div>
      <p className="cards__storage">{storage} Storage</p>
      <p className="cards__users">{usersAllowed} Users Allowed</p>
      <p className="cards__send">Send up to {sendLimit}</p>
      <button className="cards__button">LEARN MORE</button>
    </article>
  );
}

export { Cards };
