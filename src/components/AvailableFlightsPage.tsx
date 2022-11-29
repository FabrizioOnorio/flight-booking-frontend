import AvailableFlightsListTripOne from "./AvailableFlightsListTripOne";
import { IFlightListResults } from "../interface";


interface IAvailableFlightsPageProps {
	flightListOne: IFlightListResults;
}
const AvailableFlightsPage = ({
	flightListOne,
}: IAvailableFlightsPageProps) => {
	return (
		<>
			<h1>Here are the flights we found:</h1>
			<AvailableFlightsListTripOne flightListOne={flightListOne} />
		</>
	);
};

export default AvailableFlightsPage;
