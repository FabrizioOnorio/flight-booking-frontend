interface ISameCityErrorMessageProps {
	sameCity: boolean;
}

const SameCityErrorMessage = ({ sameCity }: ISameCityErrorMessageProps) => {
	return (
		<div
			className="errorInputMessage"
			style={{ display: sameCity ? "block" : "none" }}
		>
			<p>Departure and Destination can't be the same</p>
		</div>
	);
};

export default SameCityErrorMessage;
