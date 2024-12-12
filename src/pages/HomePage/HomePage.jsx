import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Coin from "../../components/Coin/Coin";

export default function HomePage() {
  const [coins, setCoins] = useState([]);
  const params = useParams();
  const coinId = params.coinId;

  useEffect(() => {
    const fetchCoins = async () => {
      const URL =
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad";
      try {
        const response = await axios.get(URL);
        console.log(response.data);

        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };
    fetchCoins();
  }, []);

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

  return (
    <section className="coin-list">
      <h1 className="coin-list__header">Cryptocurrency List</h1>
      {coins.length > 0 ? (
        <ul>
          {coins.map((coin) => (
            <Link key={coin.id} to="/">
              <Coin coin={coin} />
            </Link>
          ))}
        </ul>
      ) : (
        <p>Loading coins...</p>
      )}
    </section>
  );
}
