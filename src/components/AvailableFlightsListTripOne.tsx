import { IFlightListResults } from "../interface";
import OneFlightCard from "./OneFlightCard";

interface IAvailableFlightsListTripOneProps {
	flightListOne: IFlightListResults;
}

const AvailableFlightsListTripOne = ({
	flightListOne,
}: IAvailableFlightsListTripOneProps) => {
	return (
		<>
			{flightListOne.firstWayTrips.map(flight => {
    return <OneFlightCard key={flight.arriveAt} flight={flight} />;
  })}
		</>
	);
};

export default AvailableFlightsListTripOne;
