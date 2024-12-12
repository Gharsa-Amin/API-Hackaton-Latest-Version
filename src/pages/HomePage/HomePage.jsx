import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Coin from "../../components/Coin/Coin";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Trading from "../../components/Trading/Trading";

export default function HomePage() {
	const [coins, setCoins] = useState([]);

	useEffect(() => {
		const fetchCoins = async () => {
			const URL =
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-W6zX7BvdbX89GxTLvnApgbA5";
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
		<>
			<Header />
			<Hero />
			<section className="coin-list">
				<h1 className="coin-list__header">Cryptocurrency List</h1>
				{coins.length > 0 ? (
					<ul>
						{coins.map((coin) => (
							<Link key={coin.id} to={`/coins/${coin.id}`}>
								<Coin coin={coin} />
							</Link>
						))}
					</ul>
				) : (
					<p>Loading coins...</p>
				)}
			</section>
		</>
	);
}
