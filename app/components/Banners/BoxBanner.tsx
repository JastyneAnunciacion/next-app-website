import React from 'react'

interface BoxBannerProps {
    title: string,
    highlightText: string,
    miniDescription: string,
    buttonText: string,
}

const BoxBanner = ({ title, highlightText, miniDescription, buttonText }: BoxBannerProps) => {
    return (
        <div className='relative bg-gray-600 w-96 h-80 border-2 border-gray-400 rounded-lg p-10 text-white font-bold flex flex-col gap-3'>
            <p className='font-extrabold'>{title}</p>
            <p className='text-yellow-300 text-3xl'>{highlightText}</p>
            <p>{miniDescription}</p>
            <button className='absolute bottom-5 right-[5rem] bg-gray-900 rounded-lg h-14 w-56'>{buttonText}</button>
        </div>
    )
}

export default BoxBanner