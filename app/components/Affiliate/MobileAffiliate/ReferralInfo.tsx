import React from 'react'
import ImageResponsive from '../../ImageResponsive'

const ReferralInfo = () => {
    return (
        <div className='w-full h-full flex items-center bg-[#241b42] rounded-xl justify-between'>
            <div className='flex items-center gap-[3.13vw] ml-[4.53%]'>
                <ImageResponsive src='/images/temporary-profile-medium-image.png' alt='Medium Profile Icon' width='17.29vw' />
                <div className='flex flex-col gap-[2.08vw] font-medium'>
                    <p className='text-[5vw]'>Username</p>
                    <div className='flex gap-[2.29vw] items-center'>
                        <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                            <ImageResponsive src='/images/referral-rank-icon.png' alt='Header Icon' width='3.33vw' />
                        </div>
                        <p className='text-[#D187FF] text-[3.33vw]'>New Player</p>
                    </div>
                </div>
            </div>
            <div className='bg-[#352C58] text-[#D187FF] w-[19.79vw] aspect-[95/49] flex font-medium text-[5vw] items-center justify-center rounded-xl mr-[10.20%]'>
                10%
            </div>
        </div >
    )
}

export default ReferralInfo