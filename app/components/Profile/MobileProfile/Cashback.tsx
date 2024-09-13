import React from 'react'
import ImageResponsive from '../../ImageResponsive'

const Cashback = () => {
  return (
    <div className='flex flex-col gap-[1.88vw] text-[3.33vw]'>
      <div className='flex gap-1 items-center justify-center'>
        <p className='text-[#D187FF] text-[4.17vw]'>Cashback</p>
      </div>
      <div className='w-full aspect-[440/87] pl-[2.29vw] pr-[10.63vw] bg-[#241b42] rounded-lg flex items-center justify-between'>
        <div className='flex gap-[2.29vw] items-center justify-center'>
          <div className="bg-gradient-to-b w-[10.83vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
            <ImageResponsive src='/images/exchange-image.png' alt='Cashback Icon' width='5.21vw' />
          </div>
          <p>Your cashback:</p>
        </div>
        <p>5%</p>
      </div>
    </div>
  )
}

export default Cashback