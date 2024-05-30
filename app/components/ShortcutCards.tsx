import React from 'react'
import Image from 'next/image'

interface ShortcutCardsProps {
    title: string,
    description: string,
    buttonText: string,
    imgSrc: string
}

const ShortcutCards = ({ title, description, buttonText, imgSrc }: ShortcutCardsProps) => {
    return (
        <div className='flex flex-col flex-shrink-0 gap-2 w-[17rem] h-[21rem] border-2 border-orange-500 overflow-hidden'>
            <div className='w-full h-[135px] shrink-0 bg-gray-300/20'>
                <div className='relative w-full h-full'>
                    {imgSrc && (
                        <Image src={imgSrc} alt="Banner" layout="fill" objectFit="cover" />
                    )}
                </div>
            </div>
            <div className='p-2 flex flex-col gap-2'>
                <p className='text-white font-bold text-lg text-glow'>{title}</p>
                <p className='text-gray-400 text-sm h-16'>{description}</p>
                <button className='w-full h-12 mt-1 bg-orange-600 text-white text-glow rounded-md font-bold text-lg'>{buttonText}</button>
            </div>
        </div>
    )
}

export default ShortcutCards