import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fieldInput } from '../../constants';
import { RouteSelect } from './RouteSelect';
import { DirectionSelect } from './DirectionSelect';
import { StopSelect } from './StopSelect';

import { parseRoutes } from '../helpers';
import { DisplayTable } from '../../components/DisplayTable';

const apiRoute = "https://svc.metrotransit.org/nextripv2"

export function Selection(){
    const [fetchedRoutes, setFetchedRoutes] = useState<fieldInput[] | []>([]);
    const [selectedRoute, setSelectedRoute] = useState<string>("");
    const [selectedDirection, setSelectedDirection] = useState<string>("");
    const [tableData, setTableData] = useState<any>();

    const params = useParams();
    
    useEffect(() => {
        getRoutes();
    },[]);

    useEffect(() => {
        if(params.routeId && params.directionId && params.stopId){
            getTableData()
        }
    },[params]);

    const getRoutes = async() => {
        try{
            const response = await fetch(`${apiRoute}/routes`)
            const output = await response.json();
            const parsedOutput = parseRoutes(output)
            setFetchedRoutes(parsedOutput);
        }catch(err){
            console.log('error fetching routes:', err)
        }
    };
    
    const getTableData = async() => {
        try{
            const response = await fetch(`${apiRoute}/${params.routeId}/${params.directionId}/${params.stopId}`)
            const output = await response.json();
            setTableData(output)
        }catch(err){
            console.log('error fetching routes:', err)
        }
    }
    return(
        <div className="mt-10">
            <RouteSelect
                setSelectedRoute={setSelectedRoute}
                fetchedRoutes={fetchedRoutes}
                id="route-select"
            />
            {params.routeId ? 
                <DirectionSelect 
                    id="direction-select" 
                    setSelectedDirection={setSelectedDirection}
                /> : null
            }
            {(params.routeId || selectedRoute) && (params.directionId || selectedDirection) ? 
                <StopSelect
                    id="stop-select"
                /> : null
            }
            {
                params.routeId && params.directionId && params.stopId && tableData ? (
                    <div className="mx-auto my-12 w-2/3 min-w-[700px]">
                        <DisplayTable tableData={tableData} />
                    </div>
                ) : null
            }
        </div>
    )
};