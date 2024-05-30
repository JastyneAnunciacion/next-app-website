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
                ${currentToggle ? 'border border-orange-500' : 'bg-orange-500'} 
                w-14 h-10 rounded-lg flex items-center justify-center
                `}>
                <div className='h-7 w-7 bg-gray-300/20 rounded-full' />
                {/* replace with image */}
            </button>
        </div>
    )
}

export default FilterToggleOptions