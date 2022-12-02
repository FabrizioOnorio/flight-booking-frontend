import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import AvailableFlightsListTripTwo from "./AvailableFlightsListTripTwo";

interface IAvailableFlightsBackPageProps {
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	bookedFlights: IbookingInfos[];
	tripSearch: ITripSearch | undefined;
	flightListTwo: IFlightListResults;
}

const AvailableFlightsBackPage = ({
	flightListTwo,
	setBookedFlights,
	bookedFlights,
	tripSearch,
}: IAvailableFlightsBackPageProps) => {
	return (
		<div>
			<AvailableFlightsListTripTwo
				flightListTwo={flightListTwo}
				setBookedFlights={setBookedFlights}
				tripSearch={tripSearch}
				bookedFlights={bookedFlights}
			/>
		</div>
	);
};

export default AvailableFlightsBackPage;
