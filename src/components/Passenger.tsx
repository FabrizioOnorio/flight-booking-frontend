import { IPassenger } from "../interface";

interface IPassengerProps {
	passenger: IPassenger;
}
const Passenger = ({ passenger }: IPassengerProps) => {
	return (
		<p key={passenger.firstName + passenger.lastName}>
			{passenger.firstName} {passenger.lastName}
			{passenger.email !== undefined ? " (" + passenger.email + ")" : ""}
		</p>
	);
};

export default Passenger;
