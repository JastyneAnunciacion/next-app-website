import React from 'react'
import ImageResponsive from '../ImageResponsive'

const LeaderboardPrize = () => {
    return (
        <div className='w-full lg:w-[32.99%] aspect-[432/154] lg:aspect-[353/160] bg-[#241A43] rounded-[5px] flex gap-[7.65%] items-center px-[14.9vw] lg:px-[2.99%] justify-between'>
            <div className='w-[22.08vw] lg:w-[36.67%] shrink-0'>
                <ImageResponsive src='/images/leaderboard-prize-image.png' alt='Prize Image' width='100%' />
            </div>
            <div className='w-full flex flex-col items-center'>
                <p className='text-[2.91vw] lg:text-[0.97vw] mb-[3.12%]'>Daily</p>
                <p className='text-[2.5vw] lg:text-[0.83vw] text-[#AEA8BE] mb-[6.24%]'>Contests prize pool</p>
                <div className='w-full aspect-[156/49] bg-[#3F345E] rounded-[5px] flex items-center justify-center'>
                    <p className='text-[4.17vw] lg:text-[1.38vw] font-semibold text-[#FFBF39]'>$13,567.00</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardPrize