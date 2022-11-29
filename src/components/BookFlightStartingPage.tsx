import BookingForm from "./BookingForm";

interface IBookFlightStartingPageProps {
	setFlightList: React.Dispatch<React.SetStateAction<never[]>>;
}

const BookFlightStartingPage = ({ setFlightList }: IBookFlightStartingPageProps) => {
	return (
		<>
			<h1>Book</h1>
			<BookingForm />
		</>
	);
};

export default BookFlightStartingPage;
