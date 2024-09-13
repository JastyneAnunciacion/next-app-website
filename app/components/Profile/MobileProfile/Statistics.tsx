import React from 'react'
import ImageResponsive from '../../ImageResponsive'

const Statistics = () => {
    return (
        <div className='flex flex-col gap-[1.87vw]'>
            <div className='flex items-center justify-center'>
                <p className='text-[#D187FF] text-[4.17vw]'>Statistics</p>
            </div>
            <div className='w-full flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[2.08vw]'>
                    <div className='flex flex-col gap-[3.13vw] w-[53.54vw] aspect-[257/87] bg-[#241b42] rounded-lg px-[2.29vw] pt-[2.29vw]'>
                        <div className='flex gap-[2.08vw] items-center'>
                            <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                                <ImageResponsive src='/images/safe-image.png' alt='Total Wagered Icon' width='2.70vw' aspectWidth={13} aspectHeight={14} />
                            </div>
                            <p>Total Wagered</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                    <div className='flex flex-col gap-[3.13vw] w-[36.04vw] aspect-[173/87] bg-[#241b42] rounded-lg px-[2.29vw] pt-[2.29vw]'>
                        <div className='flex gap-[2.08vw] items-center'>
                            <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                                <ImageResponsive src='/images/safe-image.png' alt='Total Bets Icon' width='3.44vw' aspectWidth={16.5} aspectHeight={11.5} />
                            </div>
                            <p>Total Bets</p>
                        </div>
                        <p>0.00$</p>
                    </div>
                </div>
                <div className='flex flex-col gap-[3.13vw] w-full aspect-[440/87] bg-[#241b42] rounded-lg px-[2.29vw] pt-[2.29vw]'>
                    <div className='flex gap-[2.08vw] items-center'>
                        <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                            <ImageResponsive src='/images/safe-image.png' alt='Total Wins Icon' width='2.70vw' aspectWidth={13} aspectHeight={14} />
                        </div>
                        <p>Total Wins</p>
                    </div>
                    <p>0.00</p>
                </div>
            </div>
        </div>
    )
}

export default Statistics