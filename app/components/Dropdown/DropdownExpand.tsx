'use client'

import React, { ReactNode, useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface DropdownExpandProps {
    title: string,
    children: ReactNode,
    isArrowOnRight?: boolean
}

const DropdownExpand = ({ title, children, isArrowOnRight = true }: DropdownExpandProps) => {
    const [isOpen, setOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const content = contentRef.current;
        if (content) {
            if (isOpen) {
                const additionalHeightVW = window.innerWidth * 0.0111;
                content.style.maxHeight = `${content.scrollHeight + additionalHeightVW}px`;
                content.style.padding = '8px';
            } else {
                content.style.maxHeight = '0px';
                content.style.padding = '0px';
            }
        }
    }, [isOpen, children]);

    return (
        <div className={`w-full transition-all duration-500 overflow-hidden text-white font-montserrat font-medium text-[1.25vw]`}>
            <button
                onClick={() => setOpen(prev => !prev)}
                className={`w-full aspect-[535/38] flex items-center justify-between pl-[1.66vw] pr-[2.15vw] text-left ${!isOpen && 'border-b'} border-[#342155]`}>
                {isArrowOnRight ? (
                    <>
                        <p>{title}</p>
                        <div className='w-[0.89vw] aspect-[12.83/6.42]'>
                            <Image src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-no-tail-arrow-image.png`} alt="Arrow" layout='responsive' width={100} height={100} />
                        </div>
                    </>
                ) : (
                    <>
                        <Image src={`${basePath}/images/${isOpen ? 'down' : 'right'}-thin-no-tail-arrow-image.png`} alt="Arrow" width={40} height={40} />
                        <p>{title}</p>
                    </>
                )}
            </button>
            <div ref={contentRef} className={`transition-max-height duration-500 overflow-hidden`}>
                {children}
            </div>
        </div>
    )
}

export default DropdownExpand
