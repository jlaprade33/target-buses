import { HeaderImage } from '../../components/HeaderImage';
import { PageHeader } from '../../components/PageHeader';
import { Heading } from '../../components/Typography';

export function MainPage(){
    return(
        <div className="h-full w-full">
            <PageHeader />
            <HeaderImage />
            <Heading title="Real-time Departures" size="lg" />
        </div>
    )
};