import AffiliateReferralLinks from '@/app/components/Affiliate/AffiliateReferralLinks'
import AffiliateUserStats from '@/app/components/Affiliate/AffiliateUserStats'
import InvitesPromo from '@/app/components/Affiliate/InvitesPromo'
import YourReferrals from '@/app/components/Affiliate/YourReferrals'
import FAQReferral from '@/app/components/FAQReferral'
import ImageResponsive from '@/app/components/ImageResponsive'
import MainComponents from '@/app/components/MainComponents'
import SorterButton from '@/app/components/SorterButton'
import React from 'react'

const AffiliatePage = () => {
    return (
        <div>
            <MainComponents currentPage='Affiliate'>
                <div className='text-white w-full flex flex-col font-montserrat font-medium'>
                    <div className='flex items-center gap-[0.47%] mb-[1.86%]'>
                        <ImageResponsive src='/images/gradient-purple-medal-image.png' alt='Affiliate Logo' width='1.87%' />
                        <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Affiliate</p>
                    </div>
                    <div className='flex gap-[0.93%] mb-[1.86%]'>
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                    </div>
                    <div className='flex gap-[0.47%] mb-[1.4%]'>
                        <div className='w-[62.24%] aspect-[666/389]'>
                            <AffiliateReferralLinks />
                        </div>
                        <div className='w-[37.28%] aspect-[399/389] text-[0.97vw]'>
                            <AffiliateUserStats />
                        </div>
                    </div>

                    <div className='mb-[4.67%]'>
                        <InvitesPromo currentInvites={2} maxInvites={10} />
                    </div>

                    <div className='mb-[4.67%]'>
                        <YourReferrals />
                    </div>


                    <div className='mb-[4.67%]'>
                        <FAQReferral />
                    </div>
                </div>
            </MainComponents>
        </div>
    )
}

export default AffiliatePage