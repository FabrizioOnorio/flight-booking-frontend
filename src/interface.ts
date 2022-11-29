export interface Iprices {
  currency: string;
  adult: number;
  child: number;
}

export interface IOneFlight {
	depatureAt: string;
	arriveAt: string;
	avaliableSeats: number;
	prices: Iprices[];
}

export interface IFlightListResults {
	trip1Id: string;
	firstWayTrips: IOneFlight[];
	fromCity: string;
	toCity: string;
}
