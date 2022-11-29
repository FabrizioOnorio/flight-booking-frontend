import BookingForm from "./BookingForm";
import { IFlightListResults } from "../interface";


interface IBookFlightStartingPageProps {
	setFlightListOne: React.Dispatch<React.SetStateAction<IFlightListResults>>;
	setFlightListTwo: React.Dispatch<React.SetStateAction<IFlightListResults>>;
}

const BookFlightStartingPage = ({
	setFlightListOne,
	setFlightListTwo,
}: IBookFlightStartingPageProps) => {
	return (
		<>
			<h1>Book</h1>
			<BookingForm
				setFlightListOne={setFlightListOne}
				setFlightListTwo={setFlightListTwo}
			/>
		</>
	);
};

export default BookFlightStartingPage;
