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
                content.style.maxHeight = `${content.scrollHeight + 16}px`;
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
                className={`w-full h-[9.37vh] flex items-center justify-between px-4 text-left ${!isOpen && 'border-b'} border-[#342155] py-3`}>
                {isArrowOnRight ? (
                    <>
                        <p>{title}</p>
                        {!isOpen ? (
                            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
                        ) : (
                            <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={40} height={40} />
                        )}
                    </>
                ) : (
                    <>
                        {!isOpen ? (
                            <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={40} height={40} />
                        ) : (
                            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
                        )}
                        <p>{title}</p>
                    </>
                )}
            </button>
            <div ref={contentRef} className={`px-4 transition-max-height duration-500 overflow-hidden ${isOpen && 'border-b'} border-[#342155]`} style={{ maxHeight: '0px' }}>
                {children}
            </div>
        </div>
    )
}

export default DropdownExpand
