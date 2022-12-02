import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
	const handleClick = () => navigate('/book-flight-start');
	return (
		<section className="homePageSection">
			<h1>Welcome to Flight-MATCHER</h1>
      <p>Start booking your first trip with us!</p>
			<button onClick={handleClick}>Book a Flight</button>
		</section>
	);
};

export default HomePage;
