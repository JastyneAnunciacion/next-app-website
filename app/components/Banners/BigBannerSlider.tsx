'use client'

import React, { useState, useEffect, useRef } from 'react'
import BigBanner from './BigBanner';
import basePath from '@/app/utilities/basepath';

const slides = [
    {
        imgSrc: '/'
    },
    {
        imgSrc: '/'
    },
    {
        imgSrc: '/'
    },
    {
        imgSrc: '/'
    }
];

const BigBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        resetTimer();
    };

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5500); //
    };

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    return (
        <div className='relative flex items-center justify-center flex-col w-full'>
            <div className="overflow-hidden w-full h-[375px]">
                <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className='w-full flex-shrink-0 flex justify-center'>
                            <div className="w-full">
                                <BigBanner imgSrc={`${slide.imgSrc === "" ? "" : basePath + slide.imgSrc}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute flex items-center justify-center bottom-3 gap-1">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full flex items-center justify-center ${currentSlide === index ? 'bg-gray-600 cursor-default w-3 h-3' : 'bg-gray-900 w-2 h-2 cursor-pointer'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default BigBannerSlider;
