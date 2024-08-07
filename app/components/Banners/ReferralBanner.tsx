import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const ReferralBanner = () => {
    return (
        <div className='relative w-[49.35%] aspect-[176/109]'>
            <Image className='absolute' src={`${basePath}/images/4xl-referral-banner-image.png`} alt='Game Banner Image' layout='responsive' width={100} height={100} />
            <div className='absolute bg-gradient-to-b from-[#431d9b00] to-[#5621CF50] w-full h-full' />
            <div className='absolute bg-gradient-to-br from-[#FFB37C50] via-[#341a2d00] to-[#341a2d00] w-full h-full' />
            <div className='absolute text-white left-1/2 transform -translate-x-1/2 bottom-[3.7vh]'>
                <p className='font-righteous text-[3.33vw] text-nowrap leading-[3.33vw]'>HAVE REFERRAL</p>
                <div className='flex items-center gap-[0.76vw]'>
                    <p className='font-righteous text-[3.33vw] leading-[3.33vw] text-nowrap'>CODE?</p>

                    <div className='flex bg-[#170A3566] rounded-lg w-[14.51vw] aspect-[209/40] items-center pl-[7.18%] py-[2.39%] pr-[2.39%]'>
                        <input placeholder='Enter code' className='w-full placeholder-white text-[0.83vw] h-full bg-transparent text-white outline-none focus:ring-0 rounded-lg' />
                        <button className='w-[26.79%] h-full text-[0.69vw] items-center justify-center bg-[#0CD1EC] rounded-lg'>
                            Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReferralBanner