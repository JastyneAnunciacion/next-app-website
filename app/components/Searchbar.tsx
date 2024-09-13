import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import ImageResponsive from './ImageResponsive'

interface SerachbarProps {
  placeholderText?: string
  bgColor?: string
  borderColor?: string
  hasborder?: boolean

  gap?: string,
  paddingX?: string,
  searchIconWidth?: string,
}

const Searchbar = ({
  placeholderText = 'Search',
  bgColor = '#170A35',
  borderColor = '#231744',
  hasborder = true,

  gap = '0.69vw',
  paddingX = '1.04vw',
  searchIconWidth = '1.04vw',

}: SerachbarProps) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        gap: gap,
        paddingLeft: paddingX,
        paddingRight: paddingX,

      }}
      className={`w-full h-full flex items-center justify-center rounded-[10px] lg:rounded-[5px] ${hasborder && 'border'}`}>
      <ImageResponsive
        src='/images/purple-search-image.png'
        alt='Search Icon'
        width={searchIconWidth}
      />
      <input
        placeholder={placeholderText}
        className='w-full h-full bg-transparent text-white outline-none focus:ring-0' />
    </div>
  )
}

export default Searchbar