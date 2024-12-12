import "./Coin.scss";

export default function Coin({ coin }) {
  return (
    <>
      <li>
        <div className="coin">
          <img
            className="coin__image"
            src={coin.image}
            alt={coin.name}
            width={50}
            height={50}
          />
          <h2 className="coin__item">
            {coin.name}{" "}
            <span className="coin__symbol">{coin.symbol.toUpperCase()}</span>
          </h2>

          <p className="coin__price">Price: ${coin.current_price}</p>
        </div>
      </li>
    </>
  );
}
