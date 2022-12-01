export interface Iprices {
	currency: string;
	adult: number;
	child: number;
}

export interface IFlightListResults {
	trip1Id: string;
	firstWayTrips: IOneFlight[];
	secondWayTrips?: IOneFlight[];
	fromCity: string;
	toCity: string;
}

export interface IOneFlight {
	depatureAt: string;
	arriveAt: string;
	avaliableSeats: number;
	prices: Iprices[];
}

export interface IbookingInfos {
	flight: IOneFlight;
	departureCity: string | undefined;
	arrivalCity: string | undefined;
	duration: string;
	price: number;
	departureTime: string;
	arrivalTime: string;
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

export interface IPassenger {
	firstName: string;
	lasttName: string;
	email?: string;
}
