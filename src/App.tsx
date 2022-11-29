import React, { useState } from "react";
import HomePage from "./components/HomPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlightStartingPage from "./components/BookFlightStartingPage";
import AvailableFlightsPage from "./components/AvailableFlightsPage";
import { IFlightListResults } from "./interface";

function App() {
	const [flightListOne, setFlightListOne] = useState<IFlightListResults>({
		trip1Id: "",
		firstWayTrips: [],
	});
	const [flightListTwo, setFlightListTwo] = useState<IFlightListResults>({
		trip1Id: "",
		firstWayTrips: [],
	});

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
							/>
						}
					/>
					<Route
						path="/available-flights"
						element={<AvailableFlightsPage flightListOne={flightListOne} />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
