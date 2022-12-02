import { useState } from "react";
import { IbookingInfos, IPassenger } from "../interface";
import Passenger from "./Passenger";

const address =
	process.env.NODE_ENV === "development" ? "http://localhost:5000" : "";

interface ICheckInfosPageProps {
	bookedFlights: IbookingInfos[];
	passengersList: IPassenger[];
}

const CheckInfosPage = ({
	bookedFlights,
	passengersList,
}: ICheckInfosPageProps) => {
	const [booked, setBooked] = useState(false);
	const handleClick = () => {
		setBooked(true);
		const requestOptions = {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ bookedFlights, passengersList }),
		};
		fetch(`${address}/api/flights`, requestOptions)
			.then((response) => response.json())
			.then((response) => {
				return response;
			})
			.catch((error) => console.log(error.message));
	};
	const finalPrice =
		Number(bookedFlights[0]?.price) +
		(bookedFlights[1] ? Number(bookedFlights[1]?.price) : 0);
	return (
		<>
			<div className={booked ? "confirmationVisible" : "confirmationHidden"}>
				<p>Your booking is confirmes, thank you for booking with us!</p>
			</div>
			<h2>Here are your booking details: </h2>
			<p>Your booked Flights:</p>
			<div>
				<p>
					Date:{" "}
					{`${bookedFlights[0].completeDate.split("T")[0].split("-")[2]}/${
						bookedFlights[0].completeDate.split("T")[0].split("-")[1]
					}`}
					From{" "}
					{" " +
						bookedFlights[0].departureCity +
						" at " +
						bookedFlights[0].departureTime}{" "}
					to{" "}
					{" " +
						bookedFlights[0].arrivalCity +
						" at " +
						bookedFlights[0].arrivalTime}
					Duration: {" " + bookedFlights[0].duration}
					Price: {bookedFlights[0].price}
				</p>
			</div>
			<div style={{ display: !bookedFlights[1] ? "none" : "block" }}>
				<p>
					Date:{" "}
					{`${bookedFlights[1].completeDate.split("T")[0].split("-")[2]}/${
						bookedFlights[1].completeDate.split("T")[0].split("-")[1]
					}`}
					From{" "}
					{" " +
						bookedFlights[1]?.arrivalCity +
						" at " +
						bookedFlights[1]?.departureTime}{" "}
					to{" "}
					{" " +
						bookedFlights[1]?.departureCity +
						" at " +
						bookedFlights[1]?.arrivalTime}
					Duration: {" " + bookedFlights[1]?.duration}
					Price: {bookedFlights[1]?.price}
				</p>
			</div>
			<p>Total Price {" " + finalPrice}</p>
			<p>Passengers Details:</p>
			<div>
				{passengersList.map((passenger) => {
					return (
						<Passenger
							passenger={passenger}
							key={passenger.firstName + passenger.lastName}
						/>
					);
				})}
			</div>
			<button onClick={handleClick} disabled={booked}>
				Confirm!
			</button>
		</>
	);
};

export default CheckInfosPage;
