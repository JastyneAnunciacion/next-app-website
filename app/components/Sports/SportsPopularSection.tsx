import React from 'react'
import Image from 'next/image'
import SportsPopularSortButtons from './SportsPopularSortButtons'
import SportsBetCard from './SportsBetCard'
import basePath from '@/app/utilities/basepath'

const SportsPopularSection = () => {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex gap-2 items-center'>
        <div>
          <Image src={`${basePath}/images/pencil-circle-fill.256x256.png`} alt='Popular Icon' width={30} height={30}></Image>
        </div>
        <p className='text-xl'>Popular</p>
      </div>
      <SportsPopularSortButtons />
      <SportsBetCard gameType='Winner' />
    </div>
  )
}

export default SportsPopularSection