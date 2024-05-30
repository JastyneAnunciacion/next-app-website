import React from 'react'

interface BoxBannerProps {
    title: string,
    highlightText: string,
    miniDescription: string,
    buttonText: string,
}

const BoxBanner = ({ title, highlightText, miniDescription, buttonText }: BoxBannerProps) => {
    return (
        <div className='relativ w-96 h-80 border-2 bg-gray-300/20 border-orange-500 border-dashed p-10 text-white font-bold flex flex-col gap-3'>
            <p className='font-extrabold'>{title}</p>
            <p className='text-orange-500 text-3xl text-glow'>{highlightText}</p>
            <p>{miniDescription}</p>
            <button className='absolute bottom-5 right-[5rem] bg-gray-900 rounded-lg h-14 w-56'>{buttonText}</button>
        </div>
    )
}

export default BoxBanner