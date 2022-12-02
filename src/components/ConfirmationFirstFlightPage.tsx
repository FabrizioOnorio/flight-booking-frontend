import { IbookingInfos, IFlightListResults, ITripSearch } from "../interface";
import { useNavigate } from "react-router-dom";
interface IConfirmationFirstFlightPageProps {
	bookedFlights: IbookingInfos[];
	flightListOne: IFlightListResults;
	tripSearch: ITripSearch | undefined;
}

const ConfirmationFirstFlightPage = ({
	flightListOne,
	bookedFlights,
	tripSearch,
}: IConfirmationFirstFlightPageProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		if (tripSearch?.oneWay || bookedFlights.length === 2) {
			navigate("/registration");
		}
		if (!tripSearch?.oneWay && bookedFlights.length !== 2) {
			navigate("/available-flights-back");
		}
	};
	return (
		<div>
			<h3>Your flight Id: {flightListOne.trip1Id}</h3>
			<p>Congratulations, you booked your flight!</p>
			<p>
				From {" " + flightListOne.fromCity + " "} to{" "}
				{" " + flightListOne.toCity}
			</p>
			<p>
				departure time:{" "}
				{" " +
					bookedFlights[0].departureTime +
					", estimated arrival at " +
					bookedFlights[0].arrivalTime}
			</p>
			<p>Price: {" " + bookedFlights[0].price + " SEK"}</p>
			<button onClick={handleClick}>
				{tripSearch?.oneWay || bookedFlights.length === 2
					? "Check Out"
					: "Book your flight back"}
			</button>
		</div>
	);
};

export default ConfirmationFirstFlightPage;
