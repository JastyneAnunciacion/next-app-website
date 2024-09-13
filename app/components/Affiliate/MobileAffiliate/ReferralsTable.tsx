import React from 'react'
import ImageResponsive from '../../ImageResponsive'

const ReferralsTable = () => {
  return (
    <div className='w-full text-[3.33vw] font-medium'>
      <div className='flex gap-[1.45vw] items-center mb-[2.29vw]'>
        <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
          <ImageResponsive src='/images/credit-card-image.png' alt='Your Referrals Icon' width='3.13vw' aspectWidth={15} aspectHeight={11} />
        </div>
        <p className='text-[4.16vw]'>Your Referrals</p>
      </div>
      <div className='flex flex-col bg-[#241b42] h-[60.42vw] rounded-xl overflow-hidden mb-[3.54vw]'>
        <div className='flex bg-[#6A6482] h-[8.54vw] pl-[4.17vw] items-center justify-between'>
          <p className='w-full'>Type</p>
          <p className='w-full'>Amount</p>
          <p className='w-full'>Status</p>
        </div>
      </div>

      <div className='flex items-center justify-center gap-[2.26vw]'>
        <button className='bg-gradient-to-l from-[#8558d9] to-[#782bf6] rounded-xl w-[9.61vw] aspect-square flex justify-center items-center'>
          <ImageResponsive src='/images/left-thin-arrow-image.png' alt='Left Arrow' width='3.20vw' aspectWidth={15.38} aspectHeight={20} />
        </button>
        <div className='bg-[#8558d9] text-white rounded-xl w-[9.61vw] aspect-square flex items-center justify-center'>
          1
        </div>
        <button className='bg-gradient-to-r from-[#8558d9] to-[#782bf6] rounded-xl w-[9.61vw] aspect-square flex justify-center items-center'>
          <ImageResponsive src='/images/right-thin-arrow-image.png' alt='Right Arrow' width='3.20vw' aspectWidth={15.38} aspectHeight={20} />
        </button>
      </div>
    </div>
  )
}

export default ReferralsTable