import AvailableFlightsListTripOne from "./AvailableFlightsListTripOne";
import LoadingPage from "./LoadingPage";
import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import BookingsBar from "./BookingsBar";

interface IAvailableFlightsPageProps {
	flightListOne: IFlightListResults;
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	bookedFlights: IbookingInfos[];
	tripSearch: ITripSearch | undefined;
	flightListTwo: IFlightListResults;
	loading: boolean;
}
const AvailableFlightsPage = ({
	flightListOne,
	setBookedFlights,
	bookedFlights,
	tripSearch,
	loading,
}: IAvailableFlightsPageProps) => {
	if (loading) return <LoadingPage />;
	return (
		<>
			<BookingsBar bookedFlights={bookedFlights} />
			<div>
				<AvailableFlightsListTripOne
					flightListOne={flightListOne}
					setBookedFlights={setBookedFlights}
					tripSearch={tripSearch}
					bookedFlights={bookedFlights}
				/>
			</div>
		</>
	);
};

export default AvailableFlightsPage;
