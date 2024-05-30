'use client'

import React, { useState } from 'react'
import SelectionDropdown from '../Dropdown/SelectionDropdown'
import FilterToggleOptions from '../Filters/FilterToggleOptions'
import walletList from '../wallet-list.json'

const SettingsActivity = () => {
    const activitySelections = [
        { value: 'Bets' },
        { value: 'Transactions' },
        { value: 'Sport bets' },
    ]
    const [currentSelection, setSelection] = useState(activitySelections[0].value)

    const activities = activitySelections.map(activitySelection => ({
        content: activitySelection.value,
        onClick: () => {
            console.log(`Selected option: ${activitySelection.value}`);
            setSelection(activitySelection.value);
        }
    }));

    const [currentShowToggle, setShowToggle] = useState(false);

    const handleToggle = (isToggled: boolean) => {
        setShowToggle(isToggled);
    }

    const wallet = walletList.map(walletItems => ({
        content: walletItems.Token,
        onClick: () => {
            console.log(`Selected option: ${walletItems.Token}`);
        }
    }));

    return (
        <div className='self-start w-full flex flex-col gap-5'>
            <div className='flex gap-2'>
                <div className='w-80'>
                    <SelectionDropdown items={activities} placeArrowOnRight={true} />
                </div>
                <FilterToggleOptions onClick={handleToggle} />
            </div>

            {currentShowToggle && (
                <div className='flex flex-col gap-2 text-orange-500 text-glow'>
                    <div className='w-[774px]'>
                        <p className='font-semibold pl-1'>Currency</p>
                        <SelectionDropdown items={wallet} placeArrowOnRight={true} />
                    </div>

                    <div className='flex gap-2'>
                        <div>
                            <p className='font-semibold pl-1'>From</p>
                            <input
                                type='date'
                                className='border border-orange-500 bg-transparent border-dashed rounded-lg p-2 h-12 w-96 text-gray-400 outline-none focus:ring-0'
                            />
                        </div>

                        <div>
                            <p className='font-semibold pl-1'>To</p>
                            <input
                                type='date'
                                className='border border-orange-500 bg-transparent border-dashed rounded-lg p-2 h-12 w-96 text-gray-400 outline-none focus:ring-0'
                            />
                        </div>
                    </div>

                    <button className='h-10 w-48 bg-orange-600 text-white text-glow rounded-lg'>
                        Apply
                    </button>
                </div>
            )}

            <div className='w-full h-[400px] border border-dashed border-orange-600 flex items-center justify-center'>
                <p className='font-bold text-white'>{`No ${currentSelection}`}</p>
            </div>
        </div>
    )
}

export default SettingsActivity