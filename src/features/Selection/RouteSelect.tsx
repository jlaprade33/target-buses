import { Dropdown } from '../../components/Dropdown';
import { useParams, useNavigate } from 'react-router-dom';
import { fieldInput } from '../../constants';

interface RouteSelectProps {
    setSelectedRoute:  React.Dispatch<React.SetStateAction<string>>;
    fetchedRoutes: fieldInput[];
    id?: string;
}

export function RouteSelect({id, setSelectedRoute, fetchedRoutes}: RouteSelectProps){

    const params = useParams();
    const navigate = useNavigate();

    const handleChange = (e: any) => {
        const routeId = e.target.value
        navigate(`/${routeId}`)
        setSelectedRoute(routeId)
    };

    return(
        <div className="mt-10">
            {Array.isArray(fetchedRoutes) ? 
                <Dropdown 
                    label={'route'} 
                    handleChange={handleChange} 
                    placeholder={"Select route"} 
                    list={fetchedRoutes} 
                    id={id}
                /> : null
            }
        </div>
    )
};