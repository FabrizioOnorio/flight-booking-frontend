import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPassenger, ITripSearch } from "../interface";
import PassengerInformations from "./PassengerInformations";

interface IRegistrationPageProps {
	setPassengersList: React.Dispatch<React.SetStateAction<IPassenger[]>>;
	tripSearch: ITripSearch | undefined;
  passengersList: IPassenger[];
}

const RegistrationPage = ({
	setPassengersList,
	tripSearch,
  passengersList,
}: IRegistrationPageProps) => {
  const navigate = useNavigate();
	const [firstName, setFirstName] = useState("");
	const [lasttName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [infoSaved, setInfoSaved] = useState(false);
	const handleClick = () => {
		const passenger = { firstName, lasttName, email };
		setPassengersList((prev) => [...prev, passenger]);
		setInfoSaved(true);
	};
  const numberOfExtraPassengers =
		Array(Number(tripSearch?.adults) + Number(tripSearch?.children) - 1).fill('passenger');
  const handleChekoutButton = () => {
    if (numberOfExtraPassengers.length + 1 === passengersList.length) {
      navigate('/checkInfos')
    }
  }
	return (
		<>
			<h1>Passenger Informations:</h1>
			<div>
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
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button onClick={handleClick} disabled={infoSaved}>
					Add Passenger
				</button>
				{numberOfExtraPassengers.map((_passenger, index) => {
					return (
						<PassengerInformations
							key={index}
							setPassengersList={setPassengersList}
						/>
					);
				})}
			</div>
			<button
				onClick={handleChekoutButton}
				disabled={numberOfExtraPassengers.length + 1 !== passengersList.length}
			>
				Next
			</button>
		</>
	);
};

export default RegistrationPage;
