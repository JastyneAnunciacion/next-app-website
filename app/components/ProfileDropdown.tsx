'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ProfileDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='flex items-center justify-center w-20 h-10 bg-gray-800 rounded-l-3xl rounded-r-lg gap-3'>
        <div className='shrink-0'>
            <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.jpeg`} alt="Header Main Logo" width={30} height={30} />
        </div>
        <div className='shrink-0'>
            {!isOpen ? 
            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={25} height={25} />
            :
            <Image  src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={25} height={25} />
            }
        </div>
    </div>
  )
}

export default ProfileDropdown