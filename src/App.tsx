import React, { useState } from "react";
import HomePage from "./components/HomPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlightStartingPage from "./components/BookFlightStartingPage";
import AvailableFlightsPage from "./components/AvailableFlightsPage";
import {
	IbookingInfos,
	IFlightListResults,
	IPassenger,
	ITripSearch,
} from "./interface";
import ConfirmationFirstFlightPage from "./components/ConfirmationFirstFlightPage";
import AvailableFlightsBackPage from "./components/AvailableFlightsBackPage";
import RegistrationPage from "./components/RegistrationPage";
import CheckInfosPage from "./components/CheckInfosPage";

function App() {
	const [flightListOne, setFlightListOne] = useState<IFlightListResults>({
		trip1Id: "",
		firstWayTrips: [],
		fromCity: "",
		toCity: "",
	});
	const [flightListTwo, setFlightListTwo] = useState<IFlightListResults>({
		trip1Id: "",
		firstWayTrips: [],
		fromCity: "",
		toCity: "",
	});
	const [bookedFlights, setBookedFlights] = useState<IbookingInfos[]>([]);
	const [tripSearch, setTripSearch] = useState<ITripSearch>();
	const [passengersList, setPassengersList] = useState<IPassenger[]>([]);
	const [loading, setLoading] = useState(false);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/book-flight-start"
						element={
							<BookFlightStartingPage
								setFlightListOne={setFlightListOne}
								setFlightListTwo={setFlightListTwo}
								setTripSearch={setTripSearch}
								tripSearch={tripSearch}
								setLoading={setLoading}
							/>
						}
					/>
					<Route
						path="/available-flights"
						element={
							<AvailableFlightsPage
								loading={loading}
								flightListOne={flightListOne}
								setBookedFlights={setBookedFlights}
								bookedFlights={bookedFlights}
								tripSearch={tripSearch}
								flightListTwo={flightListTwo}
							/>
						}
					/>
					<Route
						path="/confirmation1/:id"
						element={
							<ConfirmationFirstFlightPage
								flightListOne={flightListOne}
								bookedFlights={bookedFlights}
								tripSearch={tripSearch}
							/>
						}
					/>
					<Route
						path="/available-flights-back"
						element={
							<AvailableFlightsBackPage
								flightListTwo={flightListTwo}
								setBookedFlights={setBookedFlights}
								bookedFlights={bookedFlights}
								tripSearch={tripSearch}
							/>
						}
					/>
					<Route
						path="/registration"
						element={
							<RegistrationPage
								setPassengersList={setPassengersList}
								tripSearch={tripSearch}
								passengersList={passengersList}
							/>
						}
					/>
					<Route
						path="/checkInfos"
						element={
							<CheckInfosPage
								bookedFlights={bookedFlights}
								passengersList={passengersList}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
