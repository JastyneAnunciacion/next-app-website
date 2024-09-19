import React from 'react'
import SportsHeader from '@/app/components/Sports/SportsHeader'
import SportsHomeTabButtons from '@/app/components/Sports/SportsHomeTabButtons'
import MediumBanner from '@/app/components/Banners/MediumBanner'
import SportsQuickBetCardSlides from '@/app/components/Sports/SportsQuickBetCardSlides'
import SportsPopularSection from '@/app/components/Sports/SportsPopularSection'
const sportsPage = () => {
  return (
    <>
      <div className='w-full'>
        <SportsHeader />
        <div className='px-4'>
          <SportsHomeTabButtons />
          <MediumBanner />
          <SportsQuickBetCardSlides />
          <SportsPopularSection />
        </div>
      </div>
    </>
  )
}

export default sportsPage