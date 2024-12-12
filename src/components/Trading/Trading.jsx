import { useState } from "react";
import "./Trading.scss";

export default function Trading({ current_price }) {
  const [coinAmount, setCoinAmount] = useState("");
  const [cadValue, setCadValue] = useState("");

  const handleCoinAmount = (event) => {
    setCoinAmount(event.target.value);
  };
  // Handle form submission
  function formSubmit(event) {
    event.preventDefault();
    const coinConversion = coinAmount * current_price;
    setCadValue(coinConversion.toFixed(2));
  }

  return (
    <form id="form" onSubmit={formSubmit}>
      <div className="title">
        <h1 className="title__header">Trade Here</h1>
      </div>
      <label htmlFor="coinAmount" id="label-coin">
        Coin
        <input
          type="text"
          className="amount-title"
          name="coinAmount"
          id="coinAmount"
          onChange={handleCoinAmount}
          value={coinAmount}
        />
      </label>

      <label htmlFor="cadValue" id="label-cad">
        CAD Value
        <input
          type="text"
          name="cadValue"
          id="cadValue"
          value={cadValue}
          readOnly
        />
      </label>

      <button type="submit">Trade</button>
    </form>
  );
}
