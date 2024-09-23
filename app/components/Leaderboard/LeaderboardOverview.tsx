import React from 'react'
import ImageResponsive from '../ImageResponsive'
import LeaderboardPosition from './LeaderboardPosition'
import LeaderboardPrize from './LeaderboardPrize'
import LeaderboardCountdown from './LeaderboardCountdown'
import LeaderboardLastChampion from './LeaderboardLastChampion'

const LeaderboardOverview = () => {
    return (
        <>
            {/* Web Ver */}
            <div className='hidden lg:block w-full text-white font-montserrat font-medium'>
                <div className='w-full flex gap-[0.47%] mb-[0.47%]'>
                    <LeaderboardPrize />
                    <LeaderboardCountdown />
                    <LeaderboardLastChampion />
                </div>
                <LeaderboardPosition />
            </div >

            {/* Mobile Ver */}
            <div className='lg:hidden w-full flex flex-col gap-[0.83vw] text-white font-montserrat font-medium'>
                <LeaderboardPrize />
                <LeaderboardCountdown />
                <LeaderboardLastChampion />
                <LeaderboardPosition />
            </div >
        </>
    )
}

export default LeaderboardOverview