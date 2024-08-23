import ImageResponsive from '@/app/components/ImageResponsive'
import MainComponents from '@/app/components/MainComponents'
import SorterButton from '@/app/components/SorterButton'
import React from 'react'

const AffiliatePage = () => {
    return (
        <div>
            <MainComponents currentPage='Affiliate'>
                <div className='text-white flex flex-col gap-[1.86%]'>
                    <div className='flex items-center gap-[0.47%]'>
                        <ImageResponsive src='/images/gradient-purple-medal-image.png' alt='Affiliate Logo' width='1.87vw' />
                        <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Affiliate</p>
                    </div>
                    <div className='flex gap-[0.93%]'>
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                    </div>
                </div>
            </MainComponents>
        </div>
    )
}

export default AffiliatePage