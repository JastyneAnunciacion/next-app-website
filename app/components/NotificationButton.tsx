import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const NotificationButton = () => {
  return (
    <button className='relative bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl mr-2'>
      <div className='h-6 w-6 bg-gray-300 rounded-full' />
      {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Header Main Logo" width={25} height={25} /> */}
      <div className='absolute bottom-7 left-6 px-2 bg-green-600 flex items-center justify-center text-white text-xs border border-black rounded-md'>
        2
      </div>
    </button>
  )
}

export default NotificationButton