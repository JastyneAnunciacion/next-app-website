import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText?: string
}

const Searchbar = ({ placeholderText = 'Search' }: SerachbarProps) => {
  return (
    <div className='w-full h-full flex items-center justify-center rounded-xl px-3 gap-2 border bg-[#170A35] border-[#231744]'>
      <div className='shrink-0 w-[4.87%] aspect-square'>
        <Image src={`/images/purple-search-image.png`} alt='Search Icon' layout='responsive' width={100} height={100} />
      </div>
      <input placeholder={placeholderText} className='w-full h-full bg-transparent text-white text-sm outline-none focus:ring-0' />
    </div>
  )
}

export default Searchbar