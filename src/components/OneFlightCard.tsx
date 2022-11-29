import { IOneFlight } from "../interface";

interface IOneFlightcard {
	flight: IOneFlight;
}

// export interface IOneFlight {
// 	depatureAt: string;
// 	arriveAt: string;
// 	avaliableSeats: number;
// 	prices: [];
// }

const OneFlightCard = ({ flight }: IOneFlightcard) => {
	return (
		<div>
			<h2>{flight.depatureAt + ' ' + flight.arriveAt}</h2>
      
		</div>
	);
};

export default OneFlightCard;
