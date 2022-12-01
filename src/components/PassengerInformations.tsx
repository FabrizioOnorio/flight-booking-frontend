import { useState } from "react";
import { IPassenger } from "../interface";

interface PassengerInformationsProps {
	setPassengersList: React.Dispatch<React.SetStateAction<IPassenger[]>>;
}

const PassengerInformations = ({
	setPassengersList,
}: PassengerInformationsProps) => {
	const [firstName, setFirstName] = useState("");
	const [lasttName, setLastName] = useState("");
	const [infoSaved, setInfoSaved] = useState(false);


	const handleClick = () => {
		const passenger = { firstName, lasttName };
		setPassengersList((prev) => [...prev, passenger]);
    setInfoSaved(true);
	};
	return (
		<>
			<input
				type="text"
				placeholder="First Name"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<input
				type="text"
				placeholder="Last Name"
				value={lasttName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<button onClick={handleClick} disabled={infoSaved}>
				Add Passenger
			</button>
		</>
	);
};

export default PassengerInformations;
