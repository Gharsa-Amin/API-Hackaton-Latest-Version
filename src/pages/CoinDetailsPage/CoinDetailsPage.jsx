import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CoinDetailsPage() {
  const [coinDetails, setCoinDetails] = useState(null);
  const params = useParams();
  const coinId = params.coinId;

  useEffect(() => {
    const fetchCoinDetails = async () => {
      const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&ids=${coinId}&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5`;
      try {
        const response = await axios.get(URL);
        console.log(response.data);
        setCoinDetails(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    fetchCoinDetails();
  }, [coinId]);

  if (!coinDetails) {
    return <p>"Coins loading..."</p>;
  } else {
    console.log(coinDetails);
    const {
      market_cap,
      price_change_percentage_24h,
      fully_diluted_valuation,
      total_volume,
      high_24h,
      low_24h,
      price_change_24h,
      market_cap_change_percentage_24h,
      circulating_supply,
      total_supply,
      max_supply,
      current_price,
    } = coinDetails[0];
    return (
      <>
        <p className="coin-list__price">Market Cap: {market_cap}</p>
        <p className="coin-list__diluted-valuation">
          Full Diluted Valuation: ${fully_diluted_valuation}
        </p>
        <p className="coint-list__total-volume">
          Total Volume: ${total_volume}
        </p>
        <p className="coin-list__high24">24Hrs High: ${high_24h}</p>
        <p className="coin-list__low24">24Hrs Low: ${low_24h}</p>
        <p className="coin-list__price-change">
          Price Change in 24Hrs: ${price_change_24h}
        </p>
        <p className="coin-list__percentage-change">
          {" "}
          Price Change in 24Hrs:
          {price_change_percentage_24h}%
        </p>
        <p className="coin-list__cap-change">
          {" "}
          Market Cap Change:
          {market_cap_change_percentage_24h}%
        </p>
        <p className="coin-list__circulating-supply">
          Circulating Supply: {circulating_supply}
        </p>
        <p className="coin-list__total-supply">Total Supply: {total_supply}</p>
        <p className="coin-list__max-supply">Max Supply: {max_supply}</p>
      </>
    );
  }
}