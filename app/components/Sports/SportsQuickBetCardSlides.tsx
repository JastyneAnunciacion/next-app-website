'use client'

import React, { useState } from 'react'
import SportsQuickBetCard from './SportsQuickBetCard'

const SportsQuickBetCardSlides = () => {
    const slides = [
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        },
        {
            imgSrc: ''
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };
    return (
        <div>
            <div className='flex items-center justify-center flex-col my-3'>
                <div className="relative overflow-hidden w-full">
                    <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {slides.map((slide, index) => (
                            <div key={index} className='w-full flex-shrink-0 flex justify-center items-center'>
                                <div className="w-[min(30rem,100%)] flex justify-center items-center">
                                    <SportsQuickBetCard />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center mt-3 gap-1">
                    {slides.map((slide, index) => (
                        <button key={index} onClick={() => goToSlide(index)} className={`flex items-center justify-center ${currentSlide === index ? 'bg-gray-900 cursor-default w-7 h-2 rounded-lg ' : 'bg-gray-600 w-3 h-1  rounded-lg cursor-pointer'}`} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SportsQuickBetCardSlides