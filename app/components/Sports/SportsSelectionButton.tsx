import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface SportsSelectionButton {
  imgSrc?: string,
  hasImage?: boolean,
  buttonText: string,
  onClick?: () => void
}

const SportsSelectionButton = ({ imgSrc, hasImage = true, buttonText, onClick }: SportsSelectionButton) => {
  const imageSource = imgSrc ? `${basePath + imgSrc}` : `${basePath}/images/pencil-circle-fill.256x256.png`
  return (
    <button className='bg-gray-600 w-full h-7 px-5 py-4 flex justify-center items-center rounded-2xl gap-2'>
      {hasImage && <Image src={imageSource} alt='Button Icon' width={20} height={20} />}
      <p className='text-nowrap'>{buttonText}</p>
    </button>
  )
}

export default SportsSelectionButton