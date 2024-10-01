import "./Cards.css";

function Cards({ plan, price, storage, usersAllowed, sendLimit }) {
  return (
    <article>
      <h2>{plan}</h2>
      <p>${price}</p>
      <p>{storage} Storage</p>
      <p>{usersAllowed} Users Allowed</p>
      <p>Send up to {sendLimit}</p>
      <button>LEARN MORE</button>
    </article>
  );
}

export { Cards };
