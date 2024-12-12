import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoinList from "./pages/CoinListPages/CoinListPages";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<CoinList />} />
			</Routes>
		</Router>
	);
}

export default App;
