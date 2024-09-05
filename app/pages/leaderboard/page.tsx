import ImageResponsive from '@/app/components/ImageResponsive'
import LeaderboardOverview from '@/app/components/Leaderboard/LeaderboardOverview'
import LeaderboardRanks from '@/app/components/Leaderboard/LeaderboardRanks'
import MainComponents from '@/app/components/MainComponents'
import React from 'react'

const LeaderboardPage = () => {
    return (
        <MainComponents currentPage='Leaderboard'>
            <div className='text-white font-montserrat font-medium'>
                <div className='w-full flex flex-col'>
                    <div className='flex items-center gap-[0.47%] mb-[1.86%]'>
                        <ImageResponsive src='/images/gradient-purple-trophy-image.png' alt='Affiliate Logo' width='1.87%' />
                        <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Leaderboard</p>
                    </div>
                </div>

                <div className='mb-[0.93%]'>
                    <LeaderboardOverview />
                </div>

                <div className='mb-[28.04%]'>
                    <LeaderboardRanks />
                </div>
            </div>
        </MainComponents>
    )
}

export default LeaderboardPage