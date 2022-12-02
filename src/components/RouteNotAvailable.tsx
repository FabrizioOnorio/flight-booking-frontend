interface IRouteNotAvailableProps {
	routeNotAvailable: boolean;
}

const RouteNotAvailable = ({ routeNotAvailable }: IRouteNotAvailableProps) => {
	return (
		<div
			className="errorInputMessage"
			style={{ display: routeNotAvailable ? "block" : "none" }}
		>
			<p>Amsterdam and Stocholm are not connected yet, sorry!</p>
		</div>
	);
};

export default RouteNotAvailable;
