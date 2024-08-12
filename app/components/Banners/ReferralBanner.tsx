import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const ReferralBanner = () => {
    return (
        <div className='relative w-[49.35%] aspect-[176/109]'>
            <Image className='absolute' src={`${basePath}/images/4xl-referral-banner-image.png`} alt='Game Banner Image' layout='responsive' width={100} height={100} />
            <div className='absolute mix-blend-overlay bg-gradient-to-b from-[#431d9b75] to-[#5621CF50] w-full h-full' />
            <div className='absolute mix-blend-screen bg-gradient-to-br from-[#ffb37c] via-[#341a2d00] to-[#341a2d00] w-full h-full' />
            <div className='absolute text-white left-1/2 transform -translate-x-1/2 bottom-[3.7vh] font-righteous text-[3.33vw] text-nowrap leading-[3.33vw]'>
                <p>HAVE REFERRAL</p>
                <p>CODE?</p>
            </div>
            <div className='absolute left-[45.83%] transform bottom-[3.7vh] flex bg-[#170A3566] rounded-lg w-[14.51vw] aspect-[209/40] items-center'>
                <input placeholder='Enter code' className='w-full ml-[7.18%]  placeholder-white text-[0.83vw] h-full bg-transparent text-white outline-none focus:ring-0 rounded-lg' />
                <button className='w-[26.79%] text-white aspect-[28/15] mr-[2.39%] text-[0.69vw] shrink-0 items-center justify-center bg-[#0CD1EC] rounded-lg'>
                    Apply
                </button>
            </div>
        </div>
    )
}

export default ReferralBanner