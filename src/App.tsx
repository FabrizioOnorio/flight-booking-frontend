import React, { useState } from "react";
import HomePage from "./components/HomPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookFlightStartingPage from "./components/BookFlightStartingPage";
import AvailableFlightsPage from "./components/AvailableFlightsPage";

function App() {
	const [flightList, setFlightList] = useState([]);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route
						path="/book-flight-start"
						element={<BookFlightStartingPage setFlightList={setFlightList} />}
					/>
					<Route path="/available-flights" element={<AvailableFlightsPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
