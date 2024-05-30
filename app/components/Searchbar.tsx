import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText?: string
}

const Searchbar = ({ placeholderText = 'Search' }: SerachbarProps) => {
  return (
    <div className='w-full h-full flex items-center justify-center rounded-xl p-3 gap-2'>
      <div className='shrink-0'>
        <Image src={`${basePath}/images/search-image.png`} alt='Search Icon' width={24} height={24} />
      </div>
      <input placeholder={placeholderText} className='w-full h-full bg-transparent text-white text-sm outline-none focus:ring-0' />
    </div>
  )
}

export default Searchbar