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
 