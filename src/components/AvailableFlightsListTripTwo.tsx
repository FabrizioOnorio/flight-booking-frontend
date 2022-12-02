import { useState } from "react";
import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import OneFlightCard from "./OneFlightCard";

interface IAvailableFlightsListTripTwoProps {
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	tripSearch: ITripSearch | undefined;
	bookedFlights: IbookingInfos[];
	flightListTwo: IFlightListResults;
}

const AvailableFlightsListTripTwo = ({
	flightListTwo,
	setBookedFlights,
	tripSearch,
	bookedFlights,
}: IAvailableFlightsListTripTwoProps) => {
	const [oneFlightBooked, setOneFlightBooked] = useState(false);
	if (flightListTwo.secondWayTrips?.length === 0)
		return <p>no flights found for the {" " + tripSearch?.toDate}, sorry</p>;
	return (
		<section className="listPageSection">
			<div
				style={{
					display: flightListTwo.firstWayTrips?.length === 0 ? "block" : "none",
				}}
			>
				<p>
					No flights found for he selected dates, please try with other dates.
				</p>
				<a href="/book-flight-start">Back to search</a>
			</div>
			<div
				className="titleListpage"
				style={{
					display: flightListTwo.firstWayTrips?.length === 0 ? "none" : "block",
				}}
			>
				<p>Book one of these flights:</p>
			</div>
			<section className="cardsList">
				{flightListTwo.secondWayTrips?.map((flight) => {
					return (
						<OneFlightCard
							oneFlightBooked={oneFlightBooked}
							setOneFlightBooked={setOneFlightBooked}
							key={flight.arriveAt}
							flight={flight}
							flightListTwo={flightListTwo}
							setBookedFlights={setBookedFlights}
							tripSearch={tripSearch}
							bookedFlights={bookedFlights}
						/>
					);
				})}
			</section>
		</section>
	);
};

export default AvailableFlightsListTripTwo;
