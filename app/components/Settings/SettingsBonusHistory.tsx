'use client'

import React, { useState } from 'react'
import SelectionDropdown from '../Dropdown/SelectionDropdown'
import FilterToggleOptions from '../Filters/FilterToggleOptions'
import walletList from '../wallet-list.json'

const SettingsBonusHistory = () => {
    const bonusHistorySelections = [
        { value: 'History' },
    ]

    const typeSelections = [
        { value: 'All' },
        { value: 'Wagering' },
        { value: 'Casino cashback' },
        { value: 'Sportsbook cashback' },
        { value: 'Free spins' },
        { value: 'Chained bonus' },
        { value: 'Sport freebet' }
    ]

    const types = typeSelections.map(typeSelection => ({
        content: typeSelection.value,
        onClick: () => {
            console.log(`Selected option: ${typeSelection.value}`);
        }
    }));

    const bonusHistory = bonusHistorySelections.map(bonusHistorySelection => ({
        content: bonusHistorySelection.value,
        onClick: () => {
            console.log(`Selected option: ${bonusHistorySelection.value}`);
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
                    <SelectionDropdown items={bonusHistory} placeArrowOnRight={true} />
                </div>
                <FilterToggleOptions onClick={handleToggle} />
            </div>

            {currentShowToggle && (
                <div className='flex flex-col gap-2 text-orange-500 '>
                    <div className='w-[774px] flex gap-2'>
                        <div className='w-full'>
                            <p className='font-semibold pl-1'>Type</p>
                            <SelectionDropdown items={types} placeArrowOnRight={true} />
                        </div>
                        <div className='w-full'>
                            <p className='font-semibold pl-1'>Currency</p>
                            <SelectionDropdown items={wallet} placeArrowOnRight={true} />
                        </div>
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

                    <button className='h-10 w-48 bg-orange-600 text-white  rounded-lg'>
                        Apply
                    </button>
                </div>
            )}

            <div className='w-full h-[400px] border border-dashed border-orange-600 flex items-center justify-center rounded-lg'>
                <p className='font-bold text-white'>No Bonuses</p>
            </div>
        </div>
    )
}

export default SettingsBonusHistory