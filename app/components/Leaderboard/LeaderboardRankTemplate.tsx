import React from 'react'
import ImageResponsive from '../ImageResponsive'

interface LeaderboardRankTemplateProps {
    rank: number
    playerProfilePictureSrc: string
    playerName: string
    isEven: boolean
    isLast: boolean
}

const LeaderboardRankTemplate = ({ rank, playerProfilePictureSrc, playerName, isEven, isLast }: LeaderboardRankTemplateProps) => {
    return (
        <div className={`${isEven && 'bg-[#130C28]'} ${!isLast && 'mb-[0.49%]'} w-full aspect-[103/4] rounded-[10px] grid grid-cols-3 items-center px-[0.97%]`}>
            <div className='flex items-center'>
                <div className='bg-[#2D2449] w-[5.94%] aspect-square mr-[2.97%] flex items-center justify-center rounded-[5px]'>{rank}</div>
                <ImageResponsive src={playerProfilePictureSrc} alt='Player Profile Image' width='7.43%' />
                <p className='text-[#D187FF] ml-[2.97%]'>{playerName}</p>
            </div>
        </div>
    )
}

export default LeaderboardRankTemplate