'use client'

import React, { ReactNode } from 'react'
import Footer from './Footer';

interface MiddleContentProps {
    children: ReactNode,
}

const MiddleContent = ({ children }: MiddleContentProps) => {
    return (
        <div className={`relative max-w-[1200px] w-full transition-width duration-300 flex flex-col items-center z-10`}>
            <div className='absolute w-full rounded-[5px] h-full bg-gradient-to-b from-[#11062E] to-[#070123] z-[-99]' />
            <div className='w-full px-[2.08vw] pt-[2.08vw] pb-[4.86vw]'>
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default MiddleContent