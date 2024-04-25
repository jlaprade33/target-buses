import { listType, directionType, stopType } from '../constants';

export const parseDirections = (list: directionType[]) => {
    let outputList = []
    for(let obj in list){
        outputList.push({name: list[obj].direction_name, id: list[obj].direction_id})
    }
    return outputList
};

export const parseRoutes = (list: listType[]) => {
    let outputList = []
    for(let i = 0; i < list.length; i++){
        outputList.push({name: list[i].route_label, id: list[i].route_id})
    };
    return outputList;
};

export const parseStops = (list: stopType[]) => {
    let outputList = []
    for(let i = 0; i < list.length; i++){
        outputList.push({name: list[i].description, id: list[i].place_code})
    };
    return outputList;
}