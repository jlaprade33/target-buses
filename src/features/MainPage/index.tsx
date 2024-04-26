import { HeaderImage } from '../../components/HeaderImage';
import { PageHeader } from '../../components/PageHeader';
import { Selection } from '../Selection';
import { ToggleSelect } from '../../components/ToggleSelect';
import { Heading } from '../../components/Typography';
import { Routes } from 'react-router-dom';

export function MainPage(){
    return(
        <div className="h-full w-full pb-16">
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