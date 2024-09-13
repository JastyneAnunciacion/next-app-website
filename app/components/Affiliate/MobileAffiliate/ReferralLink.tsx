import React from 'react'
import CopyTextTemplate from '../../Copy/CopyTextTemplate'
import ShareButton from '../../ShareButton'


const ReferralLink = () => {
  return (
    <div className='w-full flex flex-col gap-[3.54vw] text-[3.33vw]'>
      <p className='text-[#D187FF] ml-[1.25vw] text-[4.17vw]'>Your Referral Link</p>
      <div className='relative flex w-full items-center justify-start'>
        <div className='w-[55.83vw] rounded-[10px] aspect-[67/15] flex items-center bg-[#241A43] justify-between pl-[3.75vw] pr-[2.5vw] gap-[1.67vw]'>
          <CopyTextTemplate textToCopy='https://phx.gamble/examplereferralcode' copyIconWidth='38.46%' />
        </div>
        <div className='absolute w-[40.21vw] aspect-[193/49] pl-[1.66vw] right-[-4.58vw]'>
          <ShareButton />
        </div>
      </div>
    </div>
  )
}

export default ReferralLink