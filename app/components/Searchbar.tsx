import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface SerachbarProps {
  placeholderText?: string
  bgColor?: string
  borderColor?: string
  hasborder?: boolean
}

const Searchbar = ({
  placeholderText = 'Search',
  bgColor = '#170A35',
  borderColor = '#231744',
  hasborder = true
}: SerachbarProps) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor
      }}
      className={`w-full h-full flex items-center justify-center rounded-[5px] px-[1.04vw] gap-[0.69vw] ${hasborder && 'border'}`}>
      <div className='shrink-0 w-[1.04vw] aspect-square'>
        <Image src={`${basePath}/images/purple-search-image.png`} alt='Search Icon' layout='responsive' width={100} height={100} />
      </div>
      <input placeholder={placeholderText} className='w-full h-full bg-transparent text-white text-sm outline-none focus:ring-0' />
    </div>
  )
}

export default Searchbar