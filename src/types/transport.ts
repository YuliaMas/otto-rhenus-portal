export interface TransportStop {
    name: string;
    url: string;
    times: string[];
}

export interface TransportRoute {
    route: string;
    starts: string[];
    stops: TransportStop[];
}
