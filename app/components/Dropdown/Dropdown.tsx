'useClient'

import React from 'react'
import { useState } from 'react';
import { ReactNode } from 'react';
import Image from 'next/image';
import basePath from '@/app/utilities/basepath';

interface DropdownProps {
    title: string,
    children: ReactNode;
}

const Dropdown = ({ title, children }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button className='flex items-center font-bold gap-2' onClick={() => setIsOpen((prev) => !prev)}>
                {!isOpen
                    ?
                    <Image src={`${basePath}/images/right-arrow-black-image.png`} alt="Right Arrow" width={40} height={40} />
                    :
                    <Image src={`${basePath}/images/down-arrow-black-image.png`} alt="Down Arrow" width={40} height={40} />
                }
                <p>{title}</p>
            </button>
            {isOpen && (
                <div className='absolute top-6 pl-5 font-normal'>
                    <ul>
                        {children}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown