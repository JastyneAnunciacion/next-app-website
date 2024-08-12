import BigBannerSlider from './components/Banners/BigBannerSlider'
import GameBanner from './components/Banners/GameBanner'
import ReferralBanner from './components/Banners/ReferralBanner'
import CryptocurrencyCard from './components/CryptocurrencyCard'
import MainComponents from './components/MainComponents'
import QuickListGames from './components/Quicklist/QuickListGames'
import QuickListProviders from './components/Quicklist/QuickListProviders'
import QuickListSports from './components/Quicklist/QuickListSports'
import RealTimeBetWinners from './components/RealTimeBetWinners/RealTimeBetWinners'
import Searchbar from './components/Searchbar'
import walletList from "./components/wallet-list.json"

export default function Home() {
  return (
    <MainComponents currentPage='Home'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full h-[4.93vh] mb-[1.84vh]'>
          <Searchbar />
        </div>

        <div className='w-full flex gap-[1.40%] items-center justify-center mb-[3.7vh]'>
          <GameBanner imgSrc='/images/4xl-game-icon-1.png' />
          <ReferralBanner />
          <GameBanner imgSrc='/images/4xl-game-icon-2.png' />
        </div>
      </div>

      <div className='mb-[3.7vh]'>
        <QuickListSports highlightedSportsList={walletList} />
      </div>

      <div className='w-full flex flex-col gap-5 mb-[3.7vh] '>
        <QuickListGames
          headerImgSrc='/images/gradient-purple-cards-image.png'
          gameListTitle='Popular Games'
          gameList={walletList}
        />
      </div>
      <RealTimeBetWinners />
    </MainComponents>
  )
}
