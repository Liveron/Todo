import { FC } from 'react';

import './item-status-filter.css';

interface IItemStatusFilterProps {
    filter: string,
    onFilterChange: (filter: string) => void;
} 

const ItemStatusFilter: FC<IItemStatusFilterProps> = ({ filter, onFilterChange }) => {

    const buttons = [
        { name: 'all', label: 'all' },
        { name: 'active', label: 'active' },
        { name: 'done', label: 'Done' },
    ];

    const btns: JSX.Element[]  = buttons.map(({name, label}) => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

        return (
            <button 
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className='btn-group'>
            {btns}
        </div>
    )
}

export default ItemStatusFilter;