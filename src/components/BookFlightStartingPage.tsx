import BookingForm from "./BookingForm";
import { IFlightListResults, ITripSearch } from "../interface";

interface IBookFlightStartingPageProps {
	setFlightListOne: React.Dispatch<React.SetStateAction<IFlightListResults>>;
	setFlightListTwo: React.Dispatch<React.SetStateAction<IFlightListResults>>;
	setTripSearch: React.Dispatch<React.SetStateAction<ITripSearch>>;
	tripSearch: ITripSearch;
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
		<section className="bookingFormPage">
			<h1>Where do you want to fly?</h1>
			<BookingForm
				setLoading={setLoading}
				setTripSearch={setTripSearch}
				setFlightListOne={setFlightListOne}
				setFlightListTwo={setFlightListTwo}
				tripSearch={tripSearch}
			/>
		</section>
	);
};

export default BookFlightStartingPage;
