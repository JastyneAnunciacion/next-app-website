import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import ImageResponsive from '@/app/components/ImageResponsive'
const sportsPage = () => {
  return (
    <ImageResponsive src='/images/temporary-sports-page-image.png' alt='Temp Sports Page' width='100%' />
  )
}

export default sportsPage