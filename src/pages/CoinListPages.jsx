import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";

export default function CoinList() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		const fetchCoins = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
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

	return (
		<section className="coin-list">
			<h1 className="coin-list__header">Cryptocurrency List</h1>
			{coins.length > 0 ? (
				<ul>
					{coins.map((coin) => (
						<li key={coin.id}>
							<div>
								<img src={coin.image} alt={coin.name} width={50} height={50} />
								<h2>{coin.name}</h2>
								<p>{coin.symbol.toUpperCase()}</p>
								<p>Price: ${coin.current_price}</p>
								<p>Market Cap: ${coin.market_cap}</p>
								<p>24h Change: {coin.price_change_percentage_24h}%</p>
							</div>
						</li>
					))}
				</ul>
			) : (
				<p>Loading coins...</p>
			)}
		</section>
	);
}
