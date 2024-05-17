import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath';

interface RealTimeBetWinnersListItemProps {
    gameName?: string,
    userName?: string,
    timeStamp?: Date,
    betAmount?: number,
    betTokenImgSrc?: string,
    multiplier?: number,
    payout?: number,
    isEvenInList: boolean
}

const RealTimeBetWinnersListItem = ({
    gameName = 'Game',
    userName = 'Us****me',
    timeStamp = new Date(),
    betAmount = 0.00000,
    betTokenImgSrc = '/images/tokens/BTC-icon.png',
    multiplier = 1,
    payout = 0.00000,
    isEvenInList
}: RealTimeBetWinnersListItemProps) => {
    const formattedTimeStamp = timeStamp.toLocaleTimeString();

    return (
        <div className={`w-full h-20 ${isEvenInList ? 'bg-gray-500' : 'bg-gray-400'} rounded-xl`}>
            <div className='w-full h-full grid grid-cols-6 gap-20 items-center px-2 text-white font-lg'>
                <p className=''>{gameName}</p>
                <p className=''>{userName}</p>
                <p className=''>{formattedTimeStamp}</p>
                <div className='flex gap-2 items-center just'>
                    <p>{betAmount}</p>
                    <div className='shrink-0'>
                        <Image src={`${basePath + betTokenImgSrc}`} alt='Token Icon' width={20} height={20} />
                    </div>
                </div>
                <p className=''>{multiplier}</p>
                <p className=''>{payout}</p>
            </div>
        </div>
    )
}

export default RealTimeBetWinnersListItem