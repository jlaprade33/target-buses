export type listType = {
    route_id: string;
    agency_id: number;
    route_label: string;
};

export type directionType = {
    direction_id: number;
    direction_name: string;
};


export type stopType = {
    description: string;
    place_code: string;
};

export type fieldInput = {
    name: string;
    id: number | string;
}
 

export const testData = {
    alerts: [],
    departures: [
      {
        actual: true,
        departure_time: 50000,
        departure_text: "Now",
        description: "Departure 1",
        direction_id: 1,
        direction_text: "Northbound",
        gate: "Gate 1",
        route_id: "1",
        route_short_name: "Route 1",
        schedule_relationship: "Scheduled",
        stop_id: 1,
        trip_id: "1"
      },
      {
        actual: true,
        departure_time: 60000,
        departure_text: "10:42",
        description: "Departure 2",
        direction_id: 2,
        direction_text: "Southbound",
        gate: "Gate 2",
        route_id: "2",
        route_short_name: "Route 2",
        schedule_relationship: "Scheduled",
        stop_id: 2,
        trip_id: "2"
      }
    ],
    stops: [
      {
        description: "Stop 1",
        stop_id: 345,
        latitude: 123.456,
        longitude: -123.456
      }
    ]
  };
  