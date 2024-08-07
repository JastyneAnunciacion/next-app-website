import BigBannerSlider from './components/Banners/BigBannerSlider'
import GameBanner from './components/Banners/GameBanner'
import ReferralBanner from './components/Banners/ReferralBanner'
import CryptocurrencyCard from './components/CryptocurrencyCard'
import MainComponents from './components/MainComponents'
import QuickListGames from './components/Quicklist/QuickListGames'
import QuickListProviders from './components/Quicklist/QuickListProviders'
import RealTimeBetWinners from './components/RealTimeBetWinners/RealTimeBetWinners'
import Searchbar from './components/Searchbar'
import ShortcutCards from './components/ShortcutCards'
import walletList from "./components/wallet-list.json"

export default function Home() {
  return (
    <MainComponents currentPage='Home'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-full h-[4.93vh] mb-[1.84vh]'>
          <Searchbar />
        </div>

        <div className='w-full flex gap-[1.40%] items-center justify-center'>
          <GameBanner imgSrc='/images/4xl-game-icon-1.png' />
          <ReferralBanner />
          <GameBanner imgSrc='/images/4xl-game-icon-2.png' />
        </div>
      </div>

      <CryptocurrencyCard />
      <div className='w-full flex flex-col gap-5'>
        <QuickListGames gameListTitle='Top Picks' gameList={walletList} />
        <QuickListProviders providerList={walletList} />
      </div>
      <RealTimeBetWinners />
    </MainComponents>
  )
}
