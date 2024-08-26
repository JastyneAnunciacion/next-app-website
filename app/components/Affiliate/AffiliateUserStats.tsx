import React from 'react'
import ImageResponsive from '../ImageResponsive'
import AffiliateUserStatsInfo from './AffiliateUserStatsInfo'
import AffiliateUserStatInfoTemplate from './AffiliateUserStatInfoTemplate'

const AffiliateUserStats = () => {
    return (
        <div className='flex flex-col'>
            <div className='mb-[1.25%]'>
                <AffiliateUserStatsInfo />
            </div>

            <div className='flex gap-[1.25%] mb-[1.25%]'>
                <div className='w-full aspect-[197/87]'>
                    <AffiliateUserStatInfoTemplate title='Referrals' />
                </div>
                <div className='w-full aspect-[197/87]'>
                    <AffiliateUserStatInfoTemplate title='Referrals Wagered' />
                </div>
            </div>
            <div className='w-full aspect-[133/29] mb-[1.25%]'>
                <AffiliateUserStatInfoTemplate title='Referrals Wagered' tokenGap='2.51%' tokenWidth='5.01%' />
            </div>

            <div className='w-full aspect-[133/29]'>
                <AffiliateUserStatInfoTemplate
                    title='Claimable Earnings'
                    tokenGap='2.51%'
                    tokenWidth='5.01%'
                    hasButton={true}
                    buttonText='Claim Earnings'
                />
            </div>
        </div>
    )
}

export default AffiliateUserStats