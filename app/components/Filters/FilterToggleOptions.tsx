'use client'

import React, { useState } from 'react'

interface FilterToggleOptionsProps {
    onClick: (isToggled: boolean) => void
}

const FilterToggleOptions = ({ onClick }: FilterToggleOptionsProps) => {
    const [currentToggle, setToggle] = useState(false);

    const onClickToggle = () => {
        const newToggleState = !currentToggle;
        onClick(newToggleState);
        setToggle(newToggleState);
    }

    return (
        <div>
            <button
                onClick={onClickToggle}
                className={`
                ${currentToggle ? 'bg-gray-800' : 'bg-gray-500 border border-gray-800'} 
                w-14 h-10 rounded-lg flex items-center justify-center
                `}>
                <div className='h-7 w-7 bg-gray-300 rounded-full' />
                {/* replace with image */}
            </button>
        </div>
    )
}

export default FilterToggleOptions