import AvailableFlightsListTripOne from "./AvailableFlightsListTripOne";
import AvailableFlightsListTripTwo from "./AvailableFlightsListTripTwo";
import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import BookingsBar from "./BookingsBar";
import { useState } from "react";

interface IAvailableFlightsPageProps {
	flightListOne: IFlightListResults;
	setBookedFlights: React.Dispatch<React.SetStateAction<IbookingInfos[]>>;
	bookedFlights: IbookingInfos[];
	tripSearch: ITripSearch | undefined;
	flightListTwo: IFlightListResults;
}
const AvailableFlightsPage = ({
	flightListOne,
	setBookedFlights,
	bookedFlights,
	tripSearch,
	flightListTwo,
}: IAvailableFlightsPageProps) => {
	const [flightOneBooked, setFlightOneBooked] = useState(false);
	return (
		<>
			<BookingsBar bookedFlights={bookedFlights} />
			<div className={bookedFlights.length === 1 ? "listHide" : "listVisible"}>
				<AvailableFlightsListTripOne
					flightListOne={flightListOne}
					setBookedFlights={setBookedFlights}
					tripSearch={tripSearch}
					bookedFlights={bookedFlights}
					setFlightOneBooked={setFlightOneBooked}
				/>
			</div>
			<div className={bookedFlights.length === 2 ? "listHide" : "listVisible"}>
				<AvailableFlightsListTripTwo
					flightListTwo={flightListTwo}
					setBookedFlights={setBookedFlights}
					tripSearch={tripSearch}
					bookedFlights={bookedFlights}
					setFlightOneBooked={setFlightOneBooked}
				/>
			</div>
		</>
	);
};

export default AvailableFlightsPage;
