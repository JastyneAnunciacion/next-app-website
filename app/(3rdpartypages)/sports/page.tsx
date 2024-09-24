import React from 'react'
import ImageResponsive from '@/app/components/ImageResponsive'
const sportsPage = () => {
  return (
    <>
      {/* Web Version */}
      <div className='hidden lg:block w-full'>
        <ImageResponsive src='/images/temporary-sports-page-image.png' alt='Temp Sports Page' width='100%' />
      </div>

      {/* Mobile Version */}
      <div className='lg:hidden w-full'>
        <ImageResponsive src='/images/temporary-mobile-sports-page-image.png' alt='Temp Sports Mobile Page' width='100%' />
      </div>
    </>
  )
}

export default sportsPage