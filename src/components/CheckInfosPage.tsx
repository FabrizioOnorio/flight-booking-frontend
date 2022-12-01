import { useState } from "react";
import { IbookingInfos, IPassenger } from "../interface";

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
	};
	return (
		<>
			<div className={booked ? "confirmationVisible" : "confirmationHidden"}>
				<p>Your booking is confirmes, thank you for booking with us!</p>
			</div>
			<h2>Here are your booking details: </h2>
			<p>Your booked Flights:</p>
			<p>
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
			<p>
				From{" "}
				{" " +
					bookedFlights[1].departureCity +
					" at " +
					bookedFlights[1].departureTime}{" "}
				to{" "}
				{" " +
					bookedFlights[1].arrivalCity +
					" at " +
					bookedFlights[1].arrivalTime}
				Duration: {" " + bookedFlights[1].duration}
				Price: {bookedFlights[1].price}
			</p>
			<p>
				Total Price{" "}
				{" " +
					Number(bookedFlights[0]?.price) +
					(bookedFlights[1] ? Number(bookedFlights[1]?.price) : 0)}
			</p>
			<p>Passengers Details:</p>
			<div>
				{passengersList.map((passenger) => {
					return (
						<p key={passenger.firstName + passenger.lasttName}>
							{passenger.firstName +
								" " +
								passenger.lasttName +
								" " +
								passenger.email !==
							undefined
								? passenger.email
								: ""}
						</p>
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
