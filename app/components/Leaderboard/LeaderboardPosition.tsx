import React from 'react'
import ImageResponsive from '../ImageResponsive'

const LeaderboardPosition = () => {
    return (
        <>
            {/* Web Version */}
            <div className='w-full hidden lg:flex items-center bg-[#241A43] aspect-[107/8] rounded-[5px] px-[3.74%] text-[0.83vw]'>
                <ImageResponsive src='/images/md-temporary-profile-image.png' alt='Player Profile Image' width='4.04%' />
                <p className='ml-[2.02%] font-semibold text-[1.11vw] mr-[8.79%]'>Username</p>
                <div className='h-[62.5%] w-[1px] bg-[#2F2551] shrink-0' />
                <div className='mx-[8.89%]'>
                    <p className='text-[#AEA8BE] text-nowrap'>My position</p>
                    <p className='text-[0.90vw] font-semibold text-[#FFBF39]'>75th+</p>
                </div>
                <div className='h-[62.5%] w-[1px] bg-[#2F2551] shrink-0' />
                <div className='ml-[8.79%] mr-[8.89%]'>
                    <p className='text-[#AEA8BE] text-nowrap'>Wagered</p>
                    <p className='text-[0.90vw] font-semibold text-[#FFBF39]'>$0.00 </p>
                </div>
                <div className='h-[62.5%] w-[1px] bg-[#2F2551] shrink-0' />
                <div className='flex ml-auto'>
                    <p className='text-[#AEA8BE] mr-[5.21%] text-nowrap'>Wager</p>
                    <p className='text-[0.90vw] font-semibold text-nowrap'>$857,032.00</p>
                    <p className='text-[#AEA8BE] ml-[5.21%] text-nowrap'>To reach</p>
                </div>
            </div>

            {/* Mobile Version */}
            <div className='w-full font-semibold flex flex-col lg:hidden bg-[#241A43] rounded-[5px] px-[5vw] py-[6.66vw] text-[2.5vw] gap-[4.51vw]'>
                <div className='flex items-center gap-[1.66vw]'>
                    <ImageResponsive src='/images/md-temporary-profile-image.png' alt='Player Profile Image' width='8.33vw' />
                    <p className='font-semibold text-[3.33vw]'>Username</p>
                </div>
                <div>
                    <p className='text-[#AEA8BE] text-nowrap'>My position</p>
                    <p className='text-[2.71vw] font-semibold text-[#FFBF39]'>75th+</p>
                </div>
                <div>
                    <p className='text-[#AEA8BE] text-nowrap'>Wagered</p>
                    <p className='text-[2.71vw] font-semibold text-[#FFBF39]'>$0.00 </p>
                </div>
                <div className='flex gap-[2.08vw]'>
                    <p className='text-[#AEA8BE] text-nowrap'>Wager</p>
                    <p className='text-[2.71vw] font-semibold text-nowrap'>$857,032.00</p>
                    <p className='text-[#AEA8BE] text-nowrap'>To reach</p>
                </div>
            </div>
        </>
    )
}

export default LeaderboardPosition