import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";

export default function CoinDescription() {
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

	return (
		<>
			<p className="coin-list__price">Market Cap: ${coinDetails.market_cap}</p>
			<p className="coin-list__percentage">
				24h Change: {coinDetails.price_change_percentage_24h}%
			</p>
			<p className="coin-list__diluted-valuation">
				Full Dilutaed Valuation: ${coinDetails.fully_diluted_valuation}
			</p>
			<p className="coint-list__total-volume">${coinDetails.total_volume}</p>
			<p className="coin-list__high24">{coinDetails.high_24h}</p>
			<p className="coin-list__low24">{coinDetails.low_24h}</p>
			<p className="coin-list__price-change">{coinDetails.price_change_24h}</p>
			<p className="coin-list__percentage-change">
				{coinDetails.price_change_percentage_24h}
			</p>
			<p className="coin-list__cap-change">
				{coinDetails.market_cap_change_percentage_24h}
			</p>
			<p className="coin-list__circulating-supply">
				{coinDetails.circulating_supply}
			</p>
			<p className="coin-list__total-supply">{coinDetails.total_supply}</p>
			<p className="coin-list__max-supply">{coinDetails.max_supply}</p>
		</>
	);
}
