import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = () => {
	const [from, setFrom] = useState("Oslo");
	const [to, setTo] = useState("Stockholm");
	const [oneWay, setOneWay] = useState(false);
	const [roundtrip, setRoundTrip] = useState(true);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  console.log(fromDate, toDate);

	const handleChange = () => {
		setOneWay(!oneWay);
		setRoundTrip(!roundtrip);
	};

	return (
		<>
			<form>
				<label>From</label>
				<select onChange={(e) => setFrom(e.target.value)}>
					<option value={"Oslo"}>Oslo</option>
					<option value={"Stockholm"}>Stockholm</option>
					<option value={"Amsterdam"}>Amsterdam</option>
				</select>
				<label>To</label>
				<select onChange={(e) => setTo(e.target.value)}>
					<option value={"Stockholm"}>Stockholm</option>
					<option value={"Oslo"}>Oslo</option>
					<option value={"Amsterdam"}>Amsterdam</option>
				</select>
				<label>One way</label>
				<input type="checkbox" checked={oneWay} onChange={handleChange} />
				<label>Round Trip</label>
				<input type="checkbox" checked={roundtrip} onChange={handleChange} />
			</form>
				<DatePicker
					selected={fromDate}
					onChange={(date: Date) => setFromDate(date)}
				/>
				<DatePicker
					selected={toDate}
					onChange={(date: Date) => setToDate(date)}
				/>
		</>
	);
};

export default BookingForm;
