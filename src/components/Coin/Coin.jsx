export default function Coin({ coin }) {
  return (
    <>
      <li>
        <div>
          <img
            className="coin-list__image"
            src={coin.image}
            alt={coin.name}
            width={50}
            height={50}
          />
          <h2 className="coin-list__item">{coin.name}</h2>
          <p className="coin-list__symbol">{coin.symbol.toUpperCase()}</p>
          <p className="coin-list__price">Price: ${coin.current_price}</p>
        </div>
      </li>
    </>
  );
}
