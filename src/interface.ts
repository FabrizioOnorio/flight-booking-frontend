export interface Iprices {
	currency: string;
	adult: number;
	child: number;
}

export interface IFlightListResults {
	trip1Id?: string;
	trip2Id?: string;
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
	completeDate: string;
	adultsBooked: number;
	childrenBooked: number;
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
	lastName: string;
	email?: string;
}
