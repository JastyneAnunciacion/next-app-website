import React from 'react'
import ImageResponsive from '../ImageResponsive'
import LeaderboardPosition from './LeaderboardPosition'

const LeaderboardOverview = () => {
    return (
        <div className='w-full text-white font-montserrat font-medium'>
            <div className='w-full flex gap-[0.47%] mb-[0.47%]'>
                <div className='w-[32.99%] aspect-[353/160] bg-[#241A43] rounded-[5px] flex gap-[7.65%] items-center px-[2.99%] justify-between'>
                    <ImageResponsive src='/images/leaderboard-prize-image.png' alt='Prize Image' width='36.67%' />
                    <div className='w-full flex flex-col items-center'>
                        <p className='text-[0.97vw] mb-[3.12%]'>Daily</p>
                        <p className='text-[0.83vw] text-[#AEA8BE] mb-[6.24%]'>Contests prize pool</p>
                        <div className='w-full aspect-[156/49] bg-[#3F345E] rounded-[5px] flex items-center justify-center'>
                            <p className='text-[1.38vw] font-semibold text-[#FFBF39]'>$13,567.00</p>
                        </div>
                    </div>
                </div>

                <div className='w-[33.08%] aspect-[353/160] bg-[#241A43] rounded-[5px] flex flex-col items-center justify-center'>
                    <p className='text-[0.83vw] text-[#AEA8BE] mb-[5.08%]'>Time Remaining</p>
                    <div className='w-full flex justify-center gap-[4.52%]'>
                        <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                            <p className='font-extrabold text-[1.66vw] leading-[140%]'>03</p>
                            <p className='text-[#AEA8BE] text-[0.69vw]'>Hours</p>
                        </div>
                        <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                            <p className='font-extrabold text-[1.66vw] leading-[140%]'>42</p>
                            <p className='text-[#AEA8BE] text-[0.69vw]'>Minutes </p>
                        </div>
                        <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                            <p className='font-extrabold text-[1.66vw] leading-[140%]'>56</p>
                            <p className='text-[#AEA8BE] text-[0.69vw]'>Seconds</p>
                        </div>
                    </div>
                </div>

                <div className='w-[32.99%] aspect-[353/160] bg-[#241A43] rounded-[5px] flex items-center justify-center gap-[6.23%]'>
                    <ImageResponsive src='/images/md-temporary-profile-image.png' alt='Champion Profile Image' width='19.83%' />
                    <div className='flex flex-col w-[44.19%]'>
                        <p className='text-[0.83vw] text-[#AEA8BE] mb-[12.82%]'>Last Champion</p>
                        <p className='font-semibold text-[1.11vw] mb-[12.82%]'>Username</p>
                        <div className='flex text-[0.83vw] items-center'>
                            <p className='text-[#AEA8BE] mr-[6.41%]'>Profit</p>
                            <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='9.62%' />
                            <p className='text-[#02CC00] font-normal mx-[3.21%]'>34,442.53</p>
                            <p className='font-normal'>{`(50%)`}</p>
                        </div>
                    </div>
                </div>
            </div>
            <LeaderboardPosition />
        </div >
    )
}

export default LeaderboardOverview