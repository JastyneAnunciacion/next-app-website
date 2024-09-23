import React from 'react'
import ImageResponsive from '../ImageResponsive'

const LeaderboardLastChampion = () => {
    return (
        <div className='w-full lg:w-[32.99%] aspect-[432/141] lg:aspect-[353/160] bg-[#241A43] rounded-[5px] flex items-center justify-center gap-[6.23%]'>
            <ImageResponsive src='/images/md-temporary-profile-image.png' alt='Champion Profile Image' width='19.83%' />
            <div className='flex flex-col w-[44.19%]'>
                <p className='text-[2.5vw] lg:text-[0.83vw] text-[#AEA8BE] mb-[12.82%]'>Last Champion</p>
                <p className='font-semibold text-[3.33vw] lg:text-[1.11vw] mb-[12.82%]'>Username</p>
                <div className='flex text-[2.5vw] lg:text-[0.83vw] items-center'>
                    <p className='text-[#AEA8BE] mr-[6.41%]'>Profit</p>
                    <div className='w-[3.33vw] lg:w-[9.62%]'>
                        <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='100%' />
                    </div>
                    <p className='text-[#02CC00] font-normal mx-[3.21%]'>34,442.53</p>
                    <p className='font-normal'>{`(50%)`}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardLastChampion