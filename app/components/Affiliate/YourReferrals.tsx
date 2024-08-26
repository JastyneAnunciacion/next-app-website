import React from 'react'
import ImageResponsive from '../ImageResponsive'

const YourReferrals = () => {
    return (
        <div className='text-[0.97vw]'>
            <div className='flex gap-[0.37%] mb-[1.51%] items-center'>
                <ImageResponsive src='/images/gradient-purple-multiple-people-image.png' alt='Your Referrals Logo' width='1.86%' aspectWidth={20} aspectHeight={17.86} />
                <p className='text-[#DDDDDD]'>Your Referrals</p>
            </div>

            <div className='relative flex flex-col bg-[#241A43] w-full items-center aspect-[535/141] rounded-xl'>
                <div className='absolute bg-gradient-to-r from-[#070123] via-[#573A93] to-[#070123] w-full h-[1px] top-[17.73%]' />
                <div className='w-full p-[1.4%] font-semibold mb-[1.87%]'>
                    <p>Rewards Activities</p>
                </div>
                <div className='w-full relative'>
                    <div className='flex flex-col items-center'>
                        <ImageResponsive src='/images/grayscale-phoenix-mascot-image.png' alt='Your Referrals Logo' width='14.21%' />
                        <p className='text-[#9D87C9] absolute bottom-0'>No rewards yet! Invite more friends!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourReferrals