import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import SameCityErrorMessage from "./SameCityErrorMessage";

const address =
	process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

const BookingForm = () => {
	const [fromCity, setFromCity] = useState("Oslo");
	const [toCity, setToCity] = useState("Stockholm");
	const [oneWay, setOneWay] = useState(false);
	const [roundtrip, setRoundTrip] = useState(true);
	const [fromDate, setFromDate] = useState(new Date());
	const [toDate, setToDate] = useState(new Date());
	const [adults, setAdults] = useState("1");
	const [children, setChildren] = useState("0");
	const [sameCity, setSameCity] = useState(false);
	const tripSearch = {
		fromCity,
		toCity,
		oneWay,
		roundtrip,
		fromDate,
		toDate,
		adults,
		children,
	};
	const navigate = useNavigate();

	const handleChange = () => {
		setOneWay(!oneWay);
		setRoundTrip(!roundtrip);
	};

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (fromCity === toCity) {
			setSameCity(true);
			setTimeout(() => {
				setSameCity(false);
			}, 2000);
		}
		if (fromCity !== toCity) {
			fetch(
				`${address}/api/flights?tripSearch=${[
					tripSearch.fromCity,
					tripSearch.toCity,
					tripSearch.oneWay,
					tripSearch.roundtrip,
					tripSearch.fromDate.toLocaleDateString("en-CA"),
					tripSearch.toDate.toLocaleDateString("en-CA"),
					tripSearch.adults,
					tripSearch.children,
				]}`
			)
				.then((response) => response.json())
				.then((response) => {
					return response;
				})
        .then((response) => console.log(response))
				.catch((error) => console.log(error.message));
			navigate("/available-flights");
		}
	};

	return (
		<>
			<SameCityErrorMessage sameCity={sameCity} />
			<form onSubmit={handleSubmit}>
				<select onChange={(e) => setFromCity(e.target.value)}>
					<option value={"Oslo"}>Oslo</option>
					<option value={"Stockholm"}>Stockholm</option>
					<option value={"Amsterdam"}>Amsterdam</option>
				</select>
				<label>To</label>
				<select onChange={(e) => setToCity(e.target.value)}>
					<option value={"Stockholm"}>Stockholm</option>
					<option value={"Oslo"}>Oslo</option>
					<option value={"Amsterdam"}>Amsterdam</option>
				</select>
				<label>One way</label>
				<input type="checkbox" checked={oneWay} onChange={handleChange} />
				<label>Round Trip</label>
				<input type="checkbox" checked={roundtrip} onChange={handleChange} />
				<label>Adults: </label>
				<input
					type="number"
					min="1"
					value={adults}
					onChange={(e) => setAdults(e.target.value)}
				/>
				<label>Children: </label>
				<input
					type="number"
					min="0"
					value={children}
					onChange={(e) => setChildren(e.target.value)}
				/>
				<div>
					<DatePicker
						selected={fromDate}
						onChange={(date: Date) => setFromDate(date)}
					/>
				</div>
				<div style={{ display: roundtrip ? "" : "none" }}>
					<DatePicker
						selected={toDate}
						onChange={(date: Date) => setToDate(date)}
					/>
				</div>
				<button type="submit">Search and book</button>
			</form>
		</>
	);
};

export default BookingForm;
