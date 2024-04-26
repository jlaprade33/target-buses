import { useEffect, useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { fieldInput } from '../../constants';
import { parseStops } from '../helpers';

const apiRoute = "https://svc.metrotransit.org/nextripv2"

interface StopSelectProps {
    id?: string;
}

export function StopSelect({id}: StopSelectProps){
    const [fetchedStops, setFetchedStops] = useState<fieldInput[] | []>([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.routeId && params.directionId){
            getDirections()
        }
    },[params]);

    const getDirections = async() => {
        try{
            const response = await fetch(`${apiRoute}/stops/${params.routeId}/${params.directionId}`)
            const output = await response.json();
            const parsedOutput = parseStops(output)
            setFetchedStops(parsedOutput)
        }catch(err){
            console.log('error fetching routes:', err)
        }
    }

    const handleChange = (e: any) => {
        if(params.routeId){
            const stop = e.target.value
            navigate(`/${params.routeId}/${params.directionId}/${stop}`)
        }
    };

    return(
        <Dropdown 
            label={'direction'} 
            handleChange={handleChange} 
            placeholder={"Select stop"} 
            list={fetchedStops} 
            id={id}
        />
    )
};