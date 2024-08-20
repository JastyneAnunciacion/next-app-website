'use client'

import React, { useState } from 'react'
import RealTimeBetWinnersListItem from './RealTimeBetWinnersListItem'
import walletList from '../wallet-list.json'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const RealTimeBetWinners = () => {

    return (
        <div className='w-full flex flex-col font-montserrat text-white gap-[1.04vw]'>
            <div className='w-full flex gap-[0.35vw] items-center'>
                <div className='w-[1.86%] aspect-square'>
                    <Image src={`${basePath}/images/gradient-purple-fire-image.png`} alt="Latest Bets Icon" layout='responsive' width={100} height={100} />
                </div>
                <p className='font-medium text-[0.97vw]'>Latest Bets</p>
            </div>

            <div className='flex flex-col gap-3 bg-[#170A35] rounded-lg px-[1.86%] py-[1.39vw]'>
                <div>
                    <div className='grid grid-cols-5 px-[0.69vw] text-[0.83vw] text-[#D187FF] mb-[2.71vh]'>
                        <p>Game</p>
                        <p className='flex justify-center items-center'>Player</p>
                        <p className='flex justify-center items-center'>Bet Amount</p>
                        <p className='flex justify-center items-center'>Multiplier</p>
                        <p className='flex justify-end items-center'>Profit Amount</p>
                    </div>
                    <ul className='flex flex-col gap-[0.35vw]'>
                        {walletList.slice(0, 10).map((item, i) => (
                            <li key={i}>
                                <RealTimeBetWinnersListItem isEvenInList={i % 2 === 0} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RealTimeBetWinners