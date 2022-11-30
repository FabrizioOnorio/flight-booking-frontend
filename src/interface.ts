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
	secondWayTrips?: IOneFlight[];
	fromCity: string;
	toCity: string;
}

export interface IbookingInfos {
	flight: IOneFlight;
	departureCity: string | undefined;
	arrivalCity: string | undefined;
	duration: string;
  price: number;
}

export interface ITripSearch {
	fromCity: string;
	toCity: string;
	oneWay: boolean;
	roundtrip: boolean;
	fromDate: Date;
	toDate: Date;
	adults: string;
	children: string;
}
