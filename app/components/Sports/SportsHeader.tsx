'use client'

import React from 'react'
import SportsHeaderButton from './SportsHeaderButton'
import SportsDropdown from './SportsDropdown'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const SportsHeader = () => {
  const SportsDropdownButtons = [
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    },
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    },
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    },
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    },
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    },
    {
      sportName: '',
      imgSrc: '/images/sports-image.png',
      link: ''
    }
  ]

  const SportsDropdownItems = SportsDropdownButtons.map(sportsDropdownOptions => ({
    sportImgSrc: sportsDropdownOptions.imgSrc,
    onClick: () => {
      console.log(`${sportsDropdownOptions.sportName} Clicked`);
    }
  }));


  return (
    <div className='bg-gray-800 h-16 w-full flex items-center px-2'>
      <div className='flex border-r-[1px] h-9 border-white items-center pr-2 justify-between w-3/5'>
        <SportsHeaderButton />
        <SportsHeaderButton />
        <SportsHeaderButton />
        <SportsHeaderButton />
      </div>
      <div className='flex w-full pl-2 justify-between items-center'>
        <SportsHeaderButton />
        <SportsHeaderButton />
        <SportsHeaderButton />
        <SportsHeaderButton />
        <SportsDropdown sportsHeaderButton={SportsDropdownItems} />
        <button className='w-8 h-8 flex items-center justify-center'>
          <Image src={`${basePath}/images/search-image.png`} alt='Sports Header Button Image' width={20} height={20} />
        </button>
      </div>
    </div>
  )
}

export default SportsHeader