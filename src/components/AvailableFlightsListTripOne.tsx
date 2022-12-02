import { useState } from "react";
import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import OneFlightCard from "./OneFlightCard";

interface IAvailableFlightsListTripOneProps {
	flightListOne: IFlightListResults;
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	tripSearch: ITripSearch | undefined;
	bookedFlights: IbookingInfos[];
}

const AvailableFlightsListTripOne = ({
	flightListOne,
	setBookedFlights,
	tripSearch,
	bookedFlights,
}: IAvailableFlightsListTripOneProps) => {
	const [oneFlightBooked, setOneFlightBooked] = useState(false);
	if (bookedFlights.length > 0)
		return <a href="/available-flights-back">next</a>;
	return (
		<>
			<div
				style={{
					display: flightListOne.firstWayTrips.length === 0 ? "block" : "none",
				}}
			>
				<p>
					No flights found for he selected dates, please try with other dates.
				</p>
				<a href="/book-flight-start">Back to search</a>
			</div>
			<section>
				{flightListOne.firstWayTrips.map((flight) => {
					return (
						<OneFlightCard
							oneFlightBooked={oneFlightBooked}
							setOneFlightBooked={setOneFlightBooked}
							key={flight.arriveAt}
							flight={flight}
							flightListOne={flightListOne}
							setBookedFlights={setBookedFlights}
							tripSearch={tripSearch}
							bookedFlights={bookedFlights}
						/>
					);
				})}
			</section>
		</>
	);
};

export default AvailableFlightsListTripOne;
