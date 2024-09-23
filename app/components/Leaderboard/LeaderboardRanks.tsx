import React from 'react'
import LeaderboardRankTemplate from './LeaderboardRankTemplate'

const LeaderboardRanks = () => {
    const numberOfRanks = 11;
    return (
        <>
            {/* Web Ver */}
            <div className='hidden lg:block w-full bg-[#170A35] rounded-[5px] p-[1.87%] text-white font-montserrat text-[0.83vw] font-medium'>
                <div className='w-full grid grid-cols-3 mb-[1.46%]'>
                    <p className='text-[#D187FF]'>Place/Player</p>
                    <p className='text-[#FFBF39] flex justify-center'>Wagered</p>
                    <p className='text-[#02CC00] flex justify-end'>Prize</p>
                </div>
                {Array.from({ length: numberOfRanks }).map((_, index) => (
                    <LeaderboardRankTemplate
                        key={index}
                        rank={index + 1}
                        playerProfilePictureSrc='/images/md-temporary-profile-image.png'
                        playerName={'Player ' + (index + 1)}
                        isEven={index % 2 == 0}
                        isLast={index === (numberOfRanks - 1)}
                    />
                ))}
            </div>

            {/* Mobile Ver */}
            <div className='lg:hidden w-full bg-[#241A43] rounded-[10px] text-white font-montserrat text-[3.33vw] font-medium py-[3.33vw]'>
                <div className='w-full grid grid-cols-2 text-[#C0C0C0] px-[5vw] mb-[3.33vw]'>
                    <p>Place/Player</p>
                    <p className='flex justify-end'>Prize</p>
                </div>
                {Array.from({ length: numberOfRanks }).map((_, index) => (
                    <LeaderboardRankTemplate
                        key={index}
                        rank={index + 1}
                        playerProfilePictureSrc='/images/md-temporary-profile-image.png'
                        playerName={'Player ' + (index + 1)}
                        isEven={index % 2 == 0}
                        isLast={index === (numberOfRanks - 1)}
                    />
                ))}
            </div>
        </>
    )
}

export default LeaderboardRanks