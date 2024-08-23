import React from 'react'
import basePath from '../utilities/basepath'
import Image from 'next/image'

const CasinoSorterButton = () => {
    return (
        <button className='text-white w-[10.56%] aspect-[113/40] bg-[#241A43] rounded-lg flex items-center justify-center gap-[5.30%]'>
            <div className='shrink-0 w-[1.04vw] aspect-square'>
                <Image src={`${basePath}/images/thick-purple-multitool-image.png`} alt='Search Icon' layout='responsive' width={100} height={100} />
            </div>
            <p className='text-[0.83vw] font-medium'>Dashboard</p>
        </button >
    )
}

export default CasinoSorterButton