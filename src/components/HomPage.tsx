import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
	const handleClick = () => navigate('/book-flight-start');
	return (
		<>
			<h1>Welcome to Flight-Booking App</h1>
			<button onClick={handleClick}>Book a Flight</button>
		</>
	);
};

export default HomePage;
