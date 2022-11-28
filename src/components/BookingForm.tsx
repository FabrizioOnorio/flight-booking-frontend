/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
	const [fromCity, setFromCity] = useState("Oslo");
	const [toCity, setToCity] = useState("Stockholm");
	const [oneWay, setOneWay] = useState(false);
	const [roundtrip, setRoundTrip] = useState(true);
	const [fromDate, setFromDate] = useState(new Date());
	const [toDate, setToDate] = useState(new Date());
	const [adults, setAdults] = useState("1");
	const [children, setChildren] = useState("0");

	const [tripSearch] = useState({
		fromCity,
		toCity,
		oneWay,
		roundtrip,
		fromDate,
		toDate,
		adults,
		children,
	});

	const handleChange = () => {
		setOneWay(!oneWay);
		setRoundTrip(!roundtrip);
	};

	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
    console.log(tripSearch);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label>From</label>
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
