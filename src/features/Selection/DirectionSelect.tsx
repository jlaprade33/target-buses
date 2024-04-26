import { useEffect, useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { fieldInput } from '../../constants';
import { parseDirections } from '../helpers';

const apiRoute = "https://svc.metrotransit.org/nextripv2"

interface DirectionSelectProps {
    id?: string;
    setSelectedDirection: React.Dispatch<React.SetStateAction<string>>;
};

export function DirectionSelect({id, setSelectedDirection}: DirectionSelectProps){
    const [fetchedDirections, setFetchedDirections] = useState<fieldInput[] | []>([]);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.routeId){
            getDirections()
        }
    },[params]);

    const getDirections = async() => {
        try{
            const response = await fetch(`${apiRoute}/directions/${params.routeId}`)
            const output = await response.json();
            const parsedOutput = parseDirections(output)
            setFetchedDirections(parsedOutput)
        }catch(err){
            console.log('error fetching routes:', err)
        }
    }

    const handleChange = (e: any) => {
        if(params.routeId){
            const direction = e.target.value
            navigate(`/${params.routeId}/${direction}`)
            setSelectedDirection(direction)
        }
    };

    return(
        <Dropdown 
            label={'direction'} 
            handleChange={handleChange} 
            placeholder={"Select direction"} 
            list={fetchedDirections} 
            id={id}
        />
    )
};