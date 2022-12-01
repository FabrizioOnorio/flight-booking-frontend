import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import AvailableFlightsListTripTwo from "./AvailableFlightsListTripTwo";
import BookingsBar from "./BookingsBar";

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
		<>
			<BookingsBar bookedFlights={bookedFlights} />
			<div>
				<AvailableFlightsListTripTwo
					flightListTwo={flightListTwo}
					setBookedFlights={setBookedFlights}
					tripSearch={tripSearch}
					bookedFlights={bookedFlights}
				/>
			</div>
		</>
	);
};

export default AvailableFlightsBackPage;
