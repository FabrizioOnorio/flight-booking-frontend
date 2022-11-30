import React, { useState } from "react";
import HomePage from "./components/HomPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlightStartingPage from "./components/BookFlightStartingPage";
import AvailableFlightsPage from "./components/AvailableFlightsPage";
import { IbookingInfos, IFlightListResults, ITripSearch } from "./interface";

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
							/>
						}
					/>
					<Route
						path="/available-flights"
						element={
							<AvailableFlightsPage
								flightListOne={flightListOne}
								setBookedFlights={setBookedFlights}
								bookedFlights={bookedFlights}
								tripSearch={tripSearch}
								flightListTwo={flightListTwo}
							/>
						}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
