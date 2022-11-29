import { useState } from "react";
import { IFlightListResults, IOneFlight } from "../interface";

interface IOneFlightcard {
	flight: IOneFlight;
	flightListOne: IFlightListResults;
}

const OneFlightCard = ({ flight, flightListOne }: IOneFlightcard) => {
  const [clicked, setClicked] = useState(false)
	const departureTime = `${flight.depatureAt.split("T")[1].split(":")[0]}.${
		flight.depatureAt.split("T")[1].split(":")[1]
	}`;
	const arrivalTime = `${flight.arriveAt.split("T")[1].split(":")[0]}.${
		flight.arriveAt.split("T")[1].split(":")[1]
	}`;

	const diff = (start: string, end: string) => {
		const startTime = start.split(".");
		const endTime = end.split(".");
		const startDate = new Date(
			0,
			0,
			0,
			Number(startTime[0]),
			Number(startTime[1]),
			0
		);
		const endDate = new Date(
			0,
			0,
			0,
			Number(endTime[0]),
			Number(endTime[1]),
			0
		);
		let diff = endDate.getTime() - startDate.getTime();
		let hours = Math.floor(diff / 1000 / 60 / 60);
		diff -= hours * 1000 * 60 * 60;
		var minutes = Math.floor(diff / 1000 / 60);
		if (hours < 0) hours = hours + 24;
		return (
			(hours <= 9 ? "0" : "") +
			hours +
			":" +
			(minutes <= 9 ? "0" : "") +
			minutes
		);
	};

	const duration = diff(departureTime, arrivalTime);

  const handleClick = () => setClicked(!clicked);

	return (
		<div onClick={handleClick}>
			<p>
				From {" " + flightListOne.fromCity}, departure time:{" "}
				{" " + departureTime}
			</p>
			<p>
				To {" " + flightListOne.toCity}, arrival time: {" " + arrivalTime}
			</p>
			<p>Duration: {" " + duration}</p>
			<p>
				Price for this flight:{" "}
				{flight.prices[0].adult + " " + flight.prices[0].currency}
			</p>
		</div>
	);
};

export default OneFlightCard;
