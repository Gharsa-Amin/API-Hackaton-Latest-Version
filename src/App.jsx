import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CoinDetailsPage from "./pages/CoinDetailsPage/CoinDetailsPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/coins/:coinId" element={<CoinDetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
