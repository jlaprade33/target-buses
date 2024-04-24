import { useEffect, useState } from 'react';
import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { listType } from '../../constants';

const apiRoute = "https://svc.metrotransit.org/nextripv2"

export function Selection(){
    const [fetchedRoutes, setFetchedRoutes] = useState<listType | []>([]);
    const params = useParams();
    console.log('params', params)
    const navigate = useNavigate();

    useEffect(() => {
        getRoutes();
    },[]);

    const handleChange = (e: any) => {
        if(params.route){
            console.log('INSIDE')
            const direction = e.target.value
            navigate(`/${params.route}/${direction}`)
        }
        else {
            const route = e.target.value
            navigate(`/${route}`)
        }
    };

    const getRoutes = async() => {
        try{
            const response = await fetch(`${apiRoute}/routes`)
            const output = await response.json();
            setFetchedRoutes(output)
        }catch(err){
            console.log('error fetching routes:', err)
        }
    }

    return(
        <div className="mt-10">
            {Array.isArray(fetchedRoutes) ? <Dropdown label={'route'} handleChange={handleChange} placeholder={"Select Route"} list={fetchedRoutes} /> : null}
            {params.route ? <Dropdown label={'direction'} handleChange={handleChange} placeholder={"Select Direction"} list={[]} /> : null}
        </div>
    )
};