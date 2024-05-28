import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface SportsHeaderButtonProps {
  imgSrc?: string,
  onClick?: () => void
}

const SportsHeaderButton = ({ imgSrc, onClick }: SportsHeaderButtonProps) => {
  const imageSource = imgSrc ? `${basePath + imgSrc}` : `${basePath}/images/sports-image.png`
  return (
    <button className='w-8 h-8 flex items-center justify-center'>
      <Image src={imageSource} alt='Sports Header Button Image' width={20} height={20} />
    </button>
  )
}

export default SportsHeaderButton