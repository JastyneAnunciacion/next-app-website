'use client'

import React, { ReactNode, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface DropdownExpandProps {
    title: string,
    children: ReactNode,
    isArrowOnRight?: boolean
}

const DropdownExpand = ({ title, children, isArrowOnRight = false }: DropdownExpandProps) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className={`w-full ${isOpen ? 'h-96' : 'h-10'} transition-height duration-500 rounded-lg border border-orange-600 bg-black overflow-hidden`}>
            <button
                onClick={() => (setOpen(prev => !prev))}
                className='w-full flex items-center justify-between px-4 bg-orange-600'>
                {isArrowOnRight ? (
                    <>
                        <p className='font-semibold pl-1 text-white'>{title}</p>
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
                        <p className='font-semibold pl-1 text-white'>{title}</p>
                    </>
                )}
            </button>
            {children}
        </div>
    )
}

export default DropdownExpand