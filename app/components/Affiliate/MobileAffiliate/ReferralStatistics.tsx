import React from 'react'
import Image from 'next/image'
import ImageResponsive from '../../ImageResponsive'

const ReferralStatistics = () => {
    return (
        <div className='w-full flex flex-col gap-[2.08vw] mb-[2.08vw] text-[3.33vw] font-medium text-nowrap'>
            <div className='flex gap-[1.81%]'>
                <div className='w-[48.98%] aspect-[72/29] bg-[#241b42] rounded-lg pt-[1.87vw] px-[2.29vw] flex flex-col gap-[2.5vw]'>
                    <p>Referrals</p>
                    <div className='flex gap-[1.46vw] items-center'>
                        <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='6.25vw' />
                        <p>0.00</p>
                    </div>
                </div>
                <div className='w-[48.98%] aspect-[72/29] bg-[#241b42] rounded-lg pt-[1.87vw] px-[2.29vw] flex flex-col gap-[2.5vw]'>
                    <p>Referrals Wagered</p>
                    <div className='flex gap-[1.46vw] items-center'>
                        <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='6.25vw' />
                        <p>0.00</p>
                    </div>
                </div>
            </div>
            <div className='w-full aspect-[440/87] bg-[#241b42] rounded-lg pt-[1.67vw] px-[2.29vw] flex flex-col gap-[2.91vw]'>
                <p>Total Earned</p>
                <div className='flex gap-[1.46vw] items-center'>
                    <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='6.25vw' />
                    <p>0.00</p>
                </div>
            </div>
            <div className='w-full aspect-[440/87] bg-[#241b42] rounded-lg px-[2.29vw] flex items-center justify-between'>
                <div className='flex flex-col gap-[2.91vw] pt-[1.67vw]'>
                    <p>Claimable Earnings</p>
                    <div className='flex gap-[1.46vw] items-center'>
                        <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width='6.25vw' />
                        <p>0.00</p>
                    </div>
                </div>
                <button className='border flex items-center justify-center gap-[2.5vw] border-[#3B335D] text-[#D187FF] w-[38.96vw] aspect-[187/49] self-center rounded-lg mr-[9.38vw]'>
                    <ImageResponsive src='/images/tip-jar-purple-image.png' alt='Token Icon' width='3.13vw' aspectWidth={5} aspectHeight={7} />
                    <p>Claim Earnings</p>
                </button>
            </div>
        </div>
    )
}

export default ReferralStatistics