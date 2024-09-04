'use client'

import React, { useEffect, useState } from 'react'
import ImageResponsive from '../ImageResponsive'

interface LeaderboardRankTemplateProps {
    rank: number
    playerProfilePictureSrc: string
    playerName: string
    playerWagered?: number
    playerPrize?: number
    playerPrizePercentage?: number
    isEven: boolean
    isLast: boolean
}

const LeaderboardRankTemplate = ({
    rank,
    playerProfilePictureSrc,
    playerName,
    playerWagered,
    playerPrize,
    playerPrizePercentage,
    isEven,
    isLast
}: LeaderboardRankTemplateProps) => {

    //remove when actual data is available
    const [tempBetWagered, setTempWagered] = useState<number>(0.00);
    const [tempTempPrize, setTempPrize] = useState<number>(0.00);
    const [tempPrizePercentage, setTempPrizePercentage] = useState<number>(0.00);

    useEffect(() => {
        const generatedWagered = parseFloat((Math.random() * 100000).toFixed(2));
        setTempWagered(generatedWagered);

        const generatedPrize = parseFloat((Math.random() * 100000).toFixed(2));
        setTempPrize(generatedPrize);

        const generatedPrizePercentage = parseFloat((Math.random() * (75 - 10) + 10).toFixed(2));
        setTempPrizePercentage(generatedPrizePercentage);

    }, []);
    //remove when actual data is available


    return (
        <div className={`${isEven && 'bg-[#130C28]'} ${!isLast && 'mb-[0.49%]'} w-full aspect-[103/4] rounded-[10px] grid grid-cols-3 items-center px-[0.97%]`}>
            <div className='flex items-center'>
                <div className='bg-[#2D2449] w-[5.94%] aspect-square mr-[2.97%] flex items-center justify-center rounded-[5px]'>{rank}</div>
                <ImageResponsive src={playerProfilePictureSrc} alt='Player Profile Image' width='7.43%' />
                <p className='text-[#D187FF] ml-[2.97%]'>{playerName}</p>
            </div>
            <p className='flex justify-center text-[#FFBF39]'>{'$' + tempBetWagered}</p>
            <div className='flex justify-end'>
                <p className='text-[#02CC00] mr-[0.89%]'>{'$' + tempTempPrize}</p>
                <p className='text-[#757575]'>{`(` + tempPrizePercentage + `%)`}</p>
            </div>
        </div>
    )
}

export default LeaderboardRankTemplate