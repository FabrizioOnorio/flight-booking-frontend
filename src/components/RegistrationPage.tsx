import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IPassenger, ITripSearch } from "../interface";
import Passenger from "./Passenger";
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
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [infoSaved, setInfoSaved] = useState(false);
	const handleClick = () => {
		const passenger = { firstName, lastName, email };
		setPassengersList((prev) => [...prev, passenger]);
		setInfoSaved(true);
	};
	const numberOfExtraPassengers = Array(
		Number(tripSearch?.adults) + Number(tripSearch?.children) - 1
	).fill("passenger");
	const handleChekoutButton = () => {
		if (numberOfExtraPassengers.length + 1 === passengersList.length) {
			navigate("/checkInfos");
		}
	};
	return (
		<section className="registrationPage">
			<div className="registrationTitle">
				<h1>Passenger Informations:</h1>
			</div>
			<div className="firstPassengerInfosForm">
				<input
					type="text"
					placeholder="First Name"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Last Name"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
				<input
					type="text"
					placeholder="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<button
					onClick={handleClick}
					style={{ display: infoSaved ? "none" : "block" }}
					disabled={infoSaved}
				>
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
			<div className="nextRegistrationButton">
				<button
					onClick={handleChekoutButton}
					disabled={
						numberOfExtraPassengers.length + 1 !== passengersList.length
					}
				>
					Next
				</button>
			</div>
			<div className="nextRegistrationPassenger">
				{passengersList?.map((passenger) => {
					return (
						<Passenger
							passenger={passenger}
							key={passenger.firstName + passenger.lastName}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default RegistrationPage;
