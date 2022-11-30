import { IbookingInfos } from "../interface";

interface IBookingBarProps {
	bookedFlights: IbookingInfos[];
}

const BookingBar = ({ bookedFlights }: IBookingBarProps) => {
  console.log(bookedFlights);
	return (
		<section>
			<p>
				{bookedFlights.length === 1
					? "one Flight Booked"
					: "two flights booked"}
			</p>
			<p>
				Total price:
				{bookedFlights[0]?.price + (bookedFlights[1] ? bookedFlights[1]?.price : 0)}
			</p>
		</section>
	);
};

export default BookingBar;
