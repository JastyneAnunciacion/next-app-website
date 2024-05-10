import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Settings = () => {
  return (
    <div className='w-20 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 text-sm gap-2'>
        <div className='shrink-0'>
            <div className='h-6 w-6 bg-gray-300 rounded-full' />
            {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Language Logo" width={25} height={25} /> */}
        </div>
        |
        <div className='shrink-0'>
            <div className='h-6 w-6 bg-gray-300 rounded-full' />
            {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Header Main Logo" width={25} height={25} /> */}
        </div>
    </div>
  )
}

export default Settings