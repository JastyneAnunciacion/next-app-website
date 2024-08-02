import React from 'react'
import SportsHeader from '../components/Sports/SportsHeader'
import SportsHomeTabButtons from '../components/Sports/SportsHomeTabButtons'
import MediumBanner from '../components/Banners/MediumBanner'
import SportsQuickBetCardSlides from '../components/Sports/SportsQuickBetCardSlides'
import SportsPopularSection from '../components/Sports/SportsPopularSection'
import MainComponents from '../components/MainComponents'

const sportsPage = () => {
  return (
    <MainComponents currentPage='Sports'>
      <div className='w-full'>
        <SportsHeader />
        <div className='px-4'>
          <SportsHomeTabButtons />
          <MediumBanner />
          <SportsQuickBetCardSlides />
          <SportsPopularSection />
        </div>
      </div>
    </MainComponents>
  )
}

export default sportsPage