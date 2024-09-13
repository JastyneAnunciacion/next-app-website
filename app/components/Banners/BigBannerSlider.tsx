'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image';
import basePath from '@/app/utilities/basepath';

const slides = [
    {
        imgSrc: '/images/game-icon-1.png'
    },
    {
        imgSrc: '/images/game-icon-2.png'
    },
    {
        imgSrc: '/images/game-icon-3.png'
    },
    {
        imgSrc: '/images/game-icon-4.png'
    },
    {
        imgSrc: '/images/game-icon-5.png'
    },
    {
        imgSrc: '/images/game-icon-6.png'
    },
    {
        imgSrc: '/images/game-icon-7.png'
    },

];

const BigBannerSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isScrolling = useRef(false);

    const goToSlide = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            const newScrollLeft = index * (slideWidth);
            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
            resetTimer();
        }
    };

    const goToSlideViaTimer = (index: number) => {
        if (sliderRef.current) {
            const slideWidth = sliderRef.current.clientWidth;
            const newScrollLeft = index * (slideWidth);
            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
            setCurrentSlide(index);
            resetTimer();
        }
    }

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        timerRef.current = setInterval(() => {
            setCurrentSlide(prev => {
                const nextSlide = (prev === Math.ceil(slides.length / 2) - 1 ? 0 : prev + 1);
                goToSlideViaTimer(nextSlide);
                return nextSlide;
            });
        }, 5500);
    };

    const handleScroll = () => {
        if (sliderRef.current && !isScrolling.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const containerWidth = sliderRef.current.clientWidth;
            const index = Math.round(scrollLeft / (containerWidth));
            setCurrentSlide(index);
        }
    };

    useEffect(() => {
        resetTimer();
    }, []);

    useEffect(() => {
        const container = sliderRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    return (
        <div className='flex items-center justify-center flex-col w-full'>
            <div className="overflow-hidden w-full h-full">
                <div className="flex w-full overflow-x-auto" ref={sliderRef} style={{ transition: 'transform 0.5s ease' }}>
                    {slides.map((slide, index) => (
                        <button key={index} className={`${index % 2 == 0 ? 'ml-[1%] mr-[0.75%]' : 'ml-[0.75%] mr-[1%]'} shrink-0 w-[48.25%] h-auto flex items-center justify-center`}>
                            <Image src={basePath + slide.imgSrc} alt='Banner Image' layout='responsive' width={100} height={100} className='rounded-md' />
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-center gap-[1.04vw] items-center">
                {slides.slice(0, Math.ceil(slides.length / 2)).map((slide, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`rounded-full flex aspect-square ${currentSlide === index ? 'bg-[#E302AC] cursor-default w-[2.08vw] mt-[2.29vw]' : 'bg-[#4B3E84] w-[1.67vw] cursor-pointer mt-[2.08vw]'}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default BigBannerSlider;
