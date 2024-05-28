import React from 'react'
import Image from 'next/image'

interface MediumBannerProps {
    hasSeparateButton?: boolean,
    buttonText?: string
    imgSrc?: string
}

const MediumBanner = ({hasSeparateButton, buttonText, imgSrc}: MediumBannerProps) => {
  return (
    <div>
        {hasSeparateButton ? (
            <div className='bg-gray-400 h-60 flex justify-center rounded-lg w-full relative'>
                {imgSrc && (
                    <Image src={imgSrc} alt="Banner" layout="fill" objectFit="cover" className="rounded-lg" />
                )}
                <button className='bg-gray-800 text-white text-lg rounded-3xl w-[min(90%,30rem)] h-14 absolute bottom-4'>{buttonText}</button>
            </div>
            ) : (
            <button style={{backgroundImage: `${imgSrc}`}} className='bg-gray-400 h-60 flex justify-center rounded-lg w-full'>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {imgSrc && (
                    <Image src={imgSrc} alt="Banner" layout="fill" objectFit="cover" className="rounded-lg" />
                )}
                </div>
            </button>
            )}
    </div>
  )
}

export default MediumBanner