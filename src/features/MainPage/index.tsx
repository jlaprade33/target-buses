import { HeaderImage } from '../../components/HeaderImage';
import { PageHeader } from '../../components/PageHeader';
import { Selection } from '../Selection';
import { ToggleSelect } from '../../components/ToggleSelect';
import { Heading } from '../../components/Typography';

export function MainPage(){
    return(
        <div className="h-full w-full pb-40">
            <PageHeader />
            <HeaderImage />
            <div className="my-12">
                <Heading title="Real-time Departures" size="lg" />
            </div>
            <ToggleSelect />
            <Selection />
        </div>
    )
};