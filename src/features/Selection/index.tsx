import { useEffect, useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { directionType, fieldInput } from '../../constants';
import { RouteSelect } from './RouteSelect';
import { DirectionSelect } from './DirectionSelect';
import { StopSelect } from './StopSelect';

import { parseRoutes } from '../helpers';

const apiRoute = "https://svc.metrotransit.org/nextripv2"

export function Selection(){
    const [fetchedRoutes, setFetchedRoutes] = useState<fieldInput[] | []>([]);

    const [selectedRoute, setSelectedRoute] = useState<string>("");
    const [selectedDirection, setSelectedDirection] = useState<string | number>("");
    const [selectedStop, setSelectedStop] = useState<string>("");

    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        getRoutes();
    },[]);

    const getRoutes = async() => {
        try{
            const response = await fetch(`${apiRoute}/routes`)
            const output = await response.json();
            const parsedOutput = parseRoutes(output)
            console.log('parsedOutput',parsedOutput)
            setFetchedRoutes(parsedOutput);
        }catch(err){
            console.log('error fetching routes:', err)
        }
    };

    return(
        <div className="mt-10">
            <RouteSelect
                setSelectedRoute={setSelectedRoute}
                fetchedRoutes={fetchedRoutes}
            />
            {params.routeId || selectedRoute ? 
                <DirectionSelect
                    setSelectedDirection={setSelectedDirection}
                /> : null
            }
            {(params.routeId || selectedRoute) && (params.directionId || selectedDirection) ? 
                <StopSelect
                    setSelectedStop={setSelectedStop}
                /> : null
            }
        </div>
    )
};