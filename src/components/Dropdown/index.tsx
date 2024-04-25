import { ChangeEvent } from 'react';
import { fieldInput } from '../../constants';

interface DropdownProps {
    list: fieldInput[];
    placeholder: string;
    label: string;
    handleChange: (e: ChangeEvent<HTMLSelectElement>)=>void;
};

export function Dropdown({list, placeholder, handleChange, label}: DropdownProps){
    return(
        <div className='w-dropdown max-w-[600px] mx-auto my-4'>
            <select 
                className="w-full h-[60px] px-2 border border-borders-dropdown" 
                name={label}
                onChange={handleChange}
            >
                <option value="">{placeholder}</option>
                {
                    list.map((item, index) => {
                        return <option key={index} value={item.id}>{item.name}</option>
                    })
                }
                
            </select>
        </div>
    )
};