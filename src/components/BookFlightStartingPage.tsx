import BookingForm from "./BookingForm";
import { IFlightListResults, ITripSearch } from "../interface";

interface IBookFlightStartingPageProps {
	setFlightListOne: React.Dispatch<React.SetStateAction<IFlightListResults>>;
	setFlightListTwo: React.Dispatch<React.SetStateAction<IFlightListResults>>;
	setTripSearch: React.Dispatch<React.SetStateAction<ITripSearch | undefined>>;
	tripSearch: ITripSearch | undefined;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const BookFlightStartingPage = ({
	setFlightListOne,
	setFlightListTwo,
	setTripSearch,
	tripSearch,
	setLoading,
}: IBookFlightStartingPageProps) => {
	return (
		<>
			<h1>Book</h1>
			<BookingForm
				setLoading={setLoading}
				setTripSearch={setTripSearch}
				setFlightListOne={setFlightListOne}
				setFlightListTwo={setFlightListTwo}
				tripSearch={tripSearch}
			/>
		</>
	);
};

export default BookFlightStartingPage;
