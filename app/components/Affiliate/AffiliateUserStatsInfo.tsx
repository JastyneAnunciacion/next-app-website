import React from 'react'
import ImageResponsive from '../ImageResponsive'

const AffiliateUserStatsInfo = () => {
    return (
        <div className='relative bg-[#241A43] w-full aspect-[399/113] flex rounded-md items-center'>
            <div className='absolute pl-[5.01%] flex items-center gap-[3.76%] w-full'>
                <ImageResponsive src='/images/md-temporary-profile-image.png' alt='User Profile Picture' width='17.54%' />
            </div>
            <div className='absolute w-full left-[26.31%] flex flex-col gap-[3.51%]'>
                <p className='text-[1.66vw] font-semibold'>Username</p>
                <div className='flex items-center gap-[2.51%]'>
                    <div className='w-[7.51%] aspect-square bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center'>
                        <ImageResponsive src='/images/dotted-ring-image.png' alt='User Rank Icon' width='48.33%' aspectWidth={14.5} aspectHeight={15.46} />
                    </div>
                    <p className='text-[#D187FF] text-[1.11vw]'>New Player</p>
                </div>
            </div>
            <div className='absolute right-[7.52%] bg-gradient-to-r from-[#218FE3] to-[#C53AFF] text-[1.66vw] w-[23.81%] aspect-[19/9] flex font-medium items-center justify-center rounded-md'>
                10%
            </div>
        </div>
    )
}

export default AffiliateUserStatsInfo