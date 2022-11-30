import { useState } from "react";
import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import OneFlightCard from "./OneFlightCard";

interface IAvailableFlightsListTripOneProps {
	flightListOne: IFlightListResults;
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	tripSearch: ITripSearch | undefined;
	bookedFlights: IbookingInfos[];
	setFlightOneBooked: React.Dispatch<React.SetStateAction<boolean>>;
}

const AvailableFlightsListTripOne = ({
	flightListOne,
	setBookedFlights,
	tripSearch,
	bookedFlights,
	setFlightOneBooked,
}: IAvailableFlightsListTripOneProps) => {
	const [oneFlightBooked, setOneFlightBooked] = useState(false);
	return (
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
						setFlightOneBooked={setFlightOneBooked}
					/>
				);
			})}
		</section>
	);
};

export default AvailableFlightsListTripOne;
