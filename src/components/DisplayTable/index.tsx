import { useState } from 'react';
import { TableProps } from '../../constants';
import { Heading, Text } from "../Typography";
import expand from './expand.svg';
import minimize from './minimize.svg';

const tableFields = [
    {
        header: "Route",
        key: "route_short_name",
        width: '1/5',
        bold: 'bold'
    },
    {
        header: "Destination",
        key: "description",
        width: '4/5',
        bold: 'medium'
    },
    {
        header: "Departs",
        key: "departure_text",
        bold: 'bold'
    }
];

type KeyTypes = 'departure_text'| 'description' | 'route_short_name';


export function DisplayTable({tableData}: TableProps){
    const [expanded, setExpanded] = useState<boolean>(false);
    const tableRow = tableData?.departures?.slice(0, !expanded ? 3 : tableData.departures.length)
    const tableHeader = tableData.stops[0]
    return(
        <div id="display-table" className="bg-background-lightGray">
            <div className="flex justify-between w-full p-5 h-16 text-font-darkGray">
                <div><Heading id="stop-header" title={tableHeader.description} size="md" /></div>
                <div>
                    <b>Stop #:</b><span id="stop-id">{tableHeader.stop_id}</span>
                </div>
            </div>
            <table className="w-full min-h-[120px]">
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
                    {Array.isArray(tableRow) && tableRow.length > 0 ? tableRow.map((rowItem, rowIndex) => (
                        <tr className={`h-16  ${rowIndex !== 0 ? 'border-t-[1px] border-font-darkGray' : ''}`} key={rowIndex}>
                            {tableFields.map((tableItem, colIndex: number) => {
                                const keyType: KeyTypes = tableItem.key as KeyTypes;
                                return (
                                    <td
                                        className={`w-${tableItem.width} font-${tableItem.bold} px-4`}
                                        key={colIndex}
                                    >
                                        {rowItem[keyType]}
                                    </td>
                                );
                            })}
                        </tr>
                    )) : <tr><p className="p-4 font-bold text-font-darkGray">There are no depatures at this time</p></tr>}
                </tbody>
            </table>
            {
                tableData.departures.length > 3 ? (
                    <div onClick={()=>setExpanded(!expanded)} className="flex justify-start border-t-[1px] border-font-darkGray cursor-pointer hover:opacity-50 transition-opacity transition-500">
                        <img className="p-4" src={expanded ? minimize : expand} alt='expand' />
                        <div className="my-4 -ml-1">
                            <Text text={expanded ? 'View Less' : 'View More'} size="sm" color="dark" />
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
};