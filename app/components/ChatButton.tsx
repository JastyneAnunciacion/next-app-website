import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const ChatButton = () => {
  return (
    <button className='bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl'>
        <div className='h-6 w-6 bg-gray-300 rounded-full' />
        {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Header Main Logo" width={25} height={25} /> */}
    </button>
  )
}

export default ChatButton