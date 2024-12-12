// import { Form } from "react-router-dom";

export default function Trading({ current_price }) {
	// Handle form submission
	function formSubmit(event) {
		event.preventDefault();
		// Add your form submission logic here
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
				/>
			</label>

			<label htmlFor="cadValue" id="label-cad">
				CAD Value
				<input
					type="number"
					min="0"
					className="amount-title"
					name="cadValue"
					id="cadValue"
				/>
			</label>

			<button type="submit">Trade</button>
		</form>
	);
}
