import clsx from 'clsx';
import { Heading } from "../Typography";

interface TableProps {
    tableData: TableArrayProps;
};

interface TableArrayProps {
    alerts: any[];
    departures: departureData[];
    stops: stopData[];
}

type stopData = {
    description: string;
    stop_id: number;
    latitude: number;
    longitude: number;
};

type departureData = {
    actual: boolean;
    departure_time: number;
    departure_text: string;
    description: string;
    direction_id: number;
    direction_text: string;
    gate: string;
    route_id: string;
    route_short_name: string;
    schedule_relationship: string;
    stop_id: number;
    trip_id: string;
};

const tableFields = [
    {
        header: "Route",
        key: "route_short_name",
        width: '1/5'
    },
    {
        header: "Destination",
        key: "description",
        width: '3/5'
    },
    {
        header: "Departs",
        key: "departure_text",
        width: '1/5'
    }
];

type KeyTypes = 'departure_text'| 'description' | 'route_short_name';


export function DisplayTable({tableData}: TableProps){
    const tableRow = tableData.departures
    const tableHeader = tableData.stops[0]
    return(
        <div className="bg-background-lightGray">
            <div className="flex justify-between w-full p-5 h-16 text-font-darkGray">
                <div><Heading title={tableHeader.description} size="md" /></div>
                <div>
                    <b>Stop #:</b>{tableHeader.stop_id}
                </div>
            </div>
            <table className="w-full min-h-[400px]">
                <thead className="bg-background-yellow text-font-darkGray py-6 uppercase">
                    <tr className="h-16 text-xl">
                       {
                            tableFields.map((headerItem, index: number) => {
                                return <th className={`px-4 text-left w-${headerItem.width}`} key={index}>{headerItem.header}</th>
                            })
                       }
                    </tr>
                </thead>
                <tbody>
                    {tableRow.map((rowItem, rowIndex) => (
                        <tr className={`h-16 ${rowIndex !== 0 ? 'border-t-[1px] border-font-darkGray' : ''}`} key={rowIndex}>
                            {tableFields.map((tableItem, colIndex: number) => {
                                const keyType: KeyTypes = tableItem.key as KeyTypes;
                                return (
                                    <td
                                        className={`w-${tableItem.width} px-4`}
                                        key={colIndex}
                                    >
                                        {rowItem[keyType]}
                                    </td>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};