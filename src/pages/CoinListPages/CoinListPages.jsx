import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export default function CoinList() {
	const [coins, setCoins] = useState([]);

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

	return (
		<section className="coin-list">
			<h1 className="coin-list__header">Cryptocurrency List</h1>
			{coins.length > 0 ? (
				<ul>
					{coins.map((coin) => (
						<Link key={coin.id} to="/">
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
									<p className="coin-list__symbol">
										{coin.symbol.toUpperCase()}
									</p>
									<p className="coin-list__price">
										Price: ${coin.current_price}
									</p>
									{/* <p className="coin-list__price">
									Market Cap: ${coin.market_cap}
								</p>
								<p className="coin-list__percentage">
									24h Change: {coin.price_change_percentage_24h}%
								</p> */}
								</div>
							</li>
						</Link>
					))}
				</ul>
			) : (
				<p>Loading coins...</p>
			)}
		</section>
	);
}
