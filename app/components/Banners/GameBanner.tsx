import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface GameBannerProps {
    imgSrc: string,
}

const GameBanner = ({ imgSrc }: GameBannerProps) => {
    return (
        <button className='w-[23.93%] aspect-[256/327] overflow-hidden rounded-lg'>
            <Image src={basePath + imgSrc} alt='Game Banner Image' layout='responsive' width={100} height={100} />
        </button>
    )
}

export default GameBanner