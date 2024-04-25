import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { fieldInput } from '../../constants';

interface RouteSelectProps {
    setSelectedRoute:  React.Dispatch<React.SetStateAction<string>>;
    fetchedRoutes: fieldInput[];
}

export function RouteSelect({setSelectedRoute, fetchedRoutes}: RouteSelectProps){

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        if(!params.routeId){
            const routeId = e.target.value
            navigate(`/${routeId}`)
            setSelectedRoute(routeId)
        }
    };

    return(
        <div className="mt-10">
            {Array.isArray(fetchedRoutes) ? 
                <Dropdown 
                    label={'route'} 
                    handleChange={handleChange} 
                    placeholder={"Select route"} 
                    list={fetchedRoutes} 
                /> : null
            }
        </div>
    )
};