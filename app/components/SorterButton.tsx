import React from 'react'
import ImageResponsive from './ImageResponsive'

const SorterButton = () => {
    return (
        <button className='text-white w-[10.56%] aspect-[113/40] bg-[#241A43] rounded-lg flex items-center justify-center gap-[5.30%]'>
            <ImageResponsive src='/images/thick-purple-multitool-image.png' alt='Sorter Logo' width='w-[1.04vw]' />
            <p className='text-[0.83vw] font-medium'>Dashboard</p>
        </button >
    )
}

export default SorterButton