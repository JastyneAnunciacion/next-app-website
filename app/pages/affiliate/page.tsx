import AffiliateReferralLinks from '@/app/components/Affiliate/AffiliateReferralLinks'
import AffiliateUserStats from '@/app/components/Affiliate/AffiliateUserStats'
import InvitesPromo from '@/app/components/Affiliate/InvitesPromo'
import ReferralInfo from '@/app/components/Affiliate/MobileAffiliate/ReferralInfo'
import ReferralLink from '@/app/components/Affiliate/MobileAffiliate/ReferralLink'
import ReferralStatistics from '@/app/components/Affiliate/MobileAffiliate/ReferralStatistics'
import YourReferrals from '@/app/components/Affiliate/YourReferrals'
import FAQReferral from '@/app/components/FAQReferral'
import ImageResponsive from '@/app/components/ImageResponsive'
import MainComponents from '@/app/components/MainComponents'
import SorterButton from '@/app/components/SorterButton'
import React from 'react'

const AffiliatePage = () => {
    return (
        <MainComponents currentPage='Affiliate'>
            {/* Web Version */}
            <div className='text-white w-full lg:flex flex-col font-montserrat font-medium hidden'>
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

            {/* Mobile Ver */}
            <div className='lg:hidden flex flex-col items-center w-full px-[4.17vw] font-manrope overflow-x-hidden'>
                <div className='flex items-center justify-between w-full h-[6.74vh] rounded-lg bg-[#241b42]'>
                    <p className='flex justify-center items-center w-full text-[#D187FF] text-[4.17vw] font-semibold'>Rewards</p>
                </div>
                <button className='w-full my-[4.17vw]'>
                    <ImageResponsive src='/images/medium-banner-image-1.png' alt='Reward Banner Image' width='100%' aspectWidth={147} aspectHeight={71} />
                </button>
                <div className='w-full aspect-[441/109] mb-[6.88vw]'>
                    <ReferralInfo />
                </div>
                <div className='w-full mb-[4.17vw] overflow-x-hidden'>
                    <ReferralLink />
                </div>
                <div className='w-full'>
                    <ReferralStatistics />
                </div>
                <div className='w-full mb-[11.25vw]'>
                    <InvitesPromo currentInvites={2} maxInvites={10} />
                </div>
                <div className='w-full mb-[11.25vw]'>
                    <ReferralStatistics />
                </div>
                <div className='w-full'>
                    <FAQReferral isMobile={true} />
                </div>
            </div>
        </MainComponents>
    )
}

export default AffiliatePage