import React from 'react'
import CopyLink from '../Copy/CopyLink'
import ShareButton from '../ShareButton'
import ImageResponsive from '../ImageResponsive'

const AffiliateReferralLinks = () => {
    return (
        <div className='w-full h-full flex flex-col bg-[#241A43] rounded-md justify-between py-[2.80%]'>
            <div className='w-full px-[3%] mb-[4.50%]'>
                <div>
                    <p className='font-extrabold text-[2.22vw]'>INVITE A FRIEND TO GET</p>
                    <p className='text-[#B5AEC0] text-[1.11vw]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start earning now!</p>
                </div>
            </div>
            <div>
                <div className='px-[3%] mb-[4.50%]'>
                    <div className='flex gap-[1.6%] w-full'>
                        <div className='flex flex-col w-[49.20%]'>
                            <p className='mb-[1.5%] text-[0.97vw] font-medium'>Referral Link</p>
                            <div className='w-full aspect-[154/25]'>
                                <CopyLink textToCopy='https://phoenix.io/?start.9545.adf' />
                            </div>
                        </div>
                        <div className='flex flex-col w-[49.20%]'>
                            <p className='mb-[1.5%] text-[0.97vw] font-medium'>Referral Link</p>
                            <div className='w-full aspect-[154/25] text-[0.83]'>
                                <CopyLink textToCopy='https://phoenix.io/?start.9545.adf' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-[2.25%]'>
                    <div className='w-[21.92%] aspect-[73/20] text-[#AEA8BE]'>
                        <ShareButton side='Left' />
                    </div>
                    <button className='w-[3.45%] aspect-square'>
                        <ImageResponsive src='/images/purple-x-image.png' alt='Share Icon' width='100%' />
                    </button>
                    <button className='w-[3.45%] aspect-square'>
                        <ImageResponsive src='/images/purple-x-image.png' alt='Share Icon' width='100%' />
                    </button>
                    <button className='w-[3.45%] aspect-square'>
                        <ImageResponsive src='/images/purple-x-image.png' alt='Share Icon' width='100%' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AffiliateReferralLinks