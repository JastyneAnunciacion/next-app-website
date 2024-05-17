'use client'

import React, { useState } from 'react'
import RealTimeBetWinnersListItem from './RealTimeBetWinnersListItem'
import walletList from '../wallet-list.json'

const RealTimeBetWinners = () => {
    const [currentSectionSelected, setSectionSelected] = useState(0)

    return (
        <div className='w-full flex flex-col gap-5'>
            <p className='font-bold text-lg'>Fair and provable winners</p>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 px-3'>
                    <button onClick={() => (setSectionSelected(0))} className={`${currentSectionSelected === 0 && 'border-b-4 border-black font-semibold'} text-lg`}>All Bets</button>
                    <button onClick={() => (setSectionSelected(1))} className={`${currentSectionSelected === 1 && 'border-b-4 border-black font-semibold'} text-lg`}>HighRollers</button>
                </div>

                <div>
                    <div className='grid grid-cols-6 gap-20 px-2 text-sm'>
                        <p>Game</p>
                        <p>User</p>
                        <p>Time</p>
                        <p>Bet Amount</p>
                        <p>Multiplier</p>
                        <p>Payout</p>
                    </div>
                    {currentSectionSelected === 0 &&
                        <ul className=''>
                            {walletList.slice(0, 10).map((item, i) => (
                                <li key={i}>
                                    <RealTimeBetWinnersListItem isEvenInList={i % 2 === 0} />
                                </li>
                            ))}
                        </ul>
                    }
                    {currentSectionSelected === 1 &&
                        <ul className=''>
                            {walletList.slice(0, 10).map((item, i) => (
                                <li key={i}>
                                    <RealTimeBetWinnersListItem isEvenInList={i % 2 === 1} />
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            </div>
        </div>
    )
}

export default RealTimeBetWinners