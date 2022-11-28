import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookFlightStartingPage from './components/BookFlightStartingPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/book-flight-start",
		element: <BookFlightStartingPage />,
	},
]);

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
