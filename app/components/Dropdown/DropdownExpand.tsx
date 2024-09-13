'use client';

import React, { ReactNode, useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import basePath from '@/app/utilities/basepath';

interface DropdownExpandProps {
    title: string;
    children: ReactNode;
    isArrowOnRight?: boolean;
    position?: 'Top' | 'Middle' | 'Bottom';
    isMobile?: boolean;
}

const DropdownExpand = ({
    title,
    children,
    isArrowOnRight = true,
    position = 'Middle',
    isMobile = false,
}: DropdownExpandProps) => {
    const [isOpen, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            if (isOpen) {
                const additionalHeightVW = isMobile ? window.innerWidth * 0.0333 : window.innerWidth * 0.0111;
                content.style.maxHeight = `${content.scrollHeight + additionalHeightVW}px`;
                content.style.padding = '8px';
            } else {
                content.style.maxHeight = '0px';
                content.style.padding = '0px';
            }
        }
    }, [isOpen, children, isMobile]);

    const arrowSrc = `${basePath}/images/${isOpen ? (isArrowOnRight ? 'up' : 'down') : (isArrowOnRight ? 'down' : 'right')}-thin-no-tail-arrow-image.png`;
    const mobileArrowSrc = `${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`;

    return (
        <div
            className={`w-full transition-all duration-500 overflow-hidden font-medium
            ${isMobile ? 'text-[3.33vw] text-[#D187FF]  font-manrope' : 'text-[1.25vw] text-white font-montserrat'} 
            ${position === 'Top' && 'rounded-t-lg'} ${position === 'Bottom' && 'rounded-b-lg'}`}
        >

            <button
                onClick={() => setOpen((prev) => !prev)}
                className={`w-full 
                    ${isMobile ? `h-[13.75vw] pl-[6.25vw] bg-[#241a43] pr-[7.83vw] border-[#39276F] ${position != 'Bottom' && 'border-b'}`
                        :
                        `aspect-[535/38] pl-[1.66vw] pr-[2.15vw] ${!isOpen && 'border-b'} ${position === 'Top' ? 'border-[#342155]' : 'border-[#4b3785]'}`} 
          flex items-center justify-between text-left `}>

                {isArrowOnRight ? (
                    <>
                        <p>{title}</p>
                        <div className={`${isMobile ? 'w-[3.20vw] aspect-[15.38/20]' : 'w-[0.89vw] aspect-[12.83/6.42]'}`}>
                            <Image src={isMobile ? mobileArrowSrc : arrowSrc} alt="Arrow" layout="responsive" width={100} height={100} />
                        </div>
                    </>
                ) : (
                    <>
                        <div className={`${isMobile ? 'w-[3.20vw]' : 'w-[0.89vw]'} aspect-[15.38/20]`}>
                            <Image src={isMobile ? mobileArrowSrc : arrowSrc} alt="Arrow" layout="responsive" width={100} height={100} />
                        </div>
                        <p>{title}</p>
                    </>
                )}
            </button>

            <div ref={contentRef} className={`transition-max-height duration-500 overflow-hidden ${isMobile && 'text-white font-manrope'}`}>
                {children}
            </div>
        </div>
    );
};

export default DropdownExpand;
