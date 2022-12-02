import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	IbookingInfos,
	IFlightListResults,
	IOneFlight,
	ITripSearch,
} from "../interface";

interface IOneFlightcard {
	flight: IOneFlight;
	flightListOne?: IFlightListResults;
	flightListTwo?: IFlightListResults;
	oneFlightBooked: boolean;
	setOneFlightBooked: React.Dispatch<React.SetStateAction<boolean>>;
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	tripSearch: ITripSearch | undefined;
	bookedFlights: IbookingInfos[];
}

const OneFlightCard = ({
	flight,
	flightListOne,
	flightListTwo,
	setOneFlightBooked,
	setBookedFlights,
	tripSearch,
}: IOneFlightcard) => {
	const navigate = useNavigate();
	const [clicked, setClicked] = useState(false);
	const [booked, setBooked] = useState(false);
	const departureTime = `${flight.depatureAt.split("T")[1].split(":")[0]}.${
		flight.depatureAt.split("T")[1].split(":")[1]
	}`;
	const arrivalTime = `${flight.arriveAt.split("T")[1].split(":")[0]}.${
		flight.arriveAt.split("T")[1].split(":")[1]
	}`;

	const flightDate = `${flight.depatureAt.split("T")[0].split("-")[2]}/${
		flight.depatureAt.split("T")[0].split("-")[1]
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

	const handleBookingButton = (e: React.SyntheticEvent) => {
		e.stopPropagation();
		setBooked(true);
		setOneFlightBooked(true);
		const bookingInfos = {
			flight,
			departureCity:
				flightListOne !== undefined
					? flightListOne.fromCity
					: flightListTwo?.fromCity,
			arrivalCity:
				flightListOne !== undefined
					? flightListOne.toCity
					: flightListTwo?.toCity,
			duration,
			price:
				Number(flight.prices[0].adult) * Number(tripSearch?.adults) +
				Number(flight.prices[0].child) * Number(tripSearch?.children),
			departureTime,
			arrivalTime,
			completeDate: flight.depatureAt,
			adultsBooked: Number(tripSearch?.adults),
			childrenBooked: Number(tripSearch?.children),
		};
		setBookedFlights((prev) => [...prev, bookingInfos]);
		navigate(`/confirmation1/${departureTime + "-" + flightListOne?.trip1Id}`);
	};

	return (
		<div onClick={handleClick}>
			<p>Flight Date: {flightDate}</p>
			<p>
				From 
				{" " + flightListOne !== undefined
					? flightListOne?.fromCity
					: flightListTwo?.fromCity}
				, departure time: {" " + departureTime}
			</p>
			<p>
				To 
				{" " + flightListOne !== undefined
					? flightListOne?.toCity
					: flightListTwo?.toCity}
				, arrival time: {" " + arrivalTime}
			</p>
			<p>Duration: {" " + duration}</p>
			<p>
				Price for this flight:{" "}
				{flight.prices[0].adult + " " + flight.prices[0].currency + " "} per
				person
			</p>
			<div className={clicked ? "cardExtentionVisible" : "cardExtentionHidden"}>
				<p>
					Price for Children: {" " + flight.prices[0].child + " "} per person
				</p>
				<p>Availbale Seats: {" " + flight.avaliableSeats}</p>
				<p
					style={{
						display:
							Number(tripSearch?.adults) + Number(tripSearch?.children) <
							flight.avaliableSeats
								? "none"
								: "block",
					}}
				>
					There are not enough seats available to book this flight
				</p>
				<button
					onClick={handleBookingButton}
					disabled={
						Number(tripSearch?.adults) + Number(tripSearch?.children) <
						flight.avaliableSeats
							? false
							: true
					}
				>
					{booked ? "Flight Booked" : "Book This Flight"}
				</button>
			</div>
		</div>
	);
};

export default OneFlightCard;
