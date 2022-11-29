export interface IOneFlight {
	depatureAt: string;
	arriveAt: string;
	avaliableSeats: number;
	prices: [];
}

export interface IFlightListResults {
	trip1Id: string;
	firstWayTrips: IOneFlight[];
}
