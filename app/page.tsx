import GameBanner from './components/Banners/GameBanner'
import ReferralBanner from './components/Banners/ReferralBanner'
import FAQReferral from './components/FAQReferral'
import MainComponents from './components/MainComponents'
import QuickListGames from './components/Quicklist/QuickListGames'
import QuickListSports from './components/Quicklist/QuickListSports'
import RealTimeBetWinners from './components/RealTimeBetWinners/RealTimeBetWinners'
import Searchbar from './components/Searchbar'
import walletList from "./components/wallet-list.json"

export default function Home() {
  return (
    <MainComponents currentPage='Home'>
      <div className='w-full hidden lg:flex flex-col gap-[2.08vw]'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-full h-[2.78vw] mb-[1.04vw] text-[0.83vw]'>
            <Searchbar placeholderText='Search Games' />
          </div>

          <div className='w-full flex gap-[1.40%] items-center justify-center'>
            <GameBanner imgSrc='/images/4xl-game-icon-1.png' />
            <ReferralBanner />
            <GameBanner imgSrc='/images/4xl-game-icon-2.png' />
          </div>
        </div>
        <QuickListSports highlightedSportsList={walletList} />
        <QuickListGames
          headerImgSrc='/images/gradient-purple-cards-image.png'
          gameListTitle='Popular Games'
          gameList={walletList}
          rows={2}
        />
        <RealTimeBetWinners />
        <div className='mb-[4.67%]'>
          <FAQReferral />
        </div>
      </div>

      <div className="flex flex-col w-full items-center lg:hidden">
        <div className="w-full max-w-[91.88%] flex flex-col mb-[3.54vw] gap-[5.41vw]">
          {/* <BigBannerSlider /> */}
          <div className="w-full h-[10.41vw]">
            {/* <Serachbar placeholderText='Search Games' /> */}
          </div>
        </div>

        <div className="w-full flex flex-col gap-[6.25vw] justify-center">
          {/* <QuickListGames gameListTitle="Top Games" gameList={walletList} />
          <QuickListGames gameListTitle="New" gameList={walletList} />
          <QuickListGames gameListTitle="Biggest Multiplier" gameList={walletList} />
          <QuickListGames gameListTitle="Bonus Buy" gameList={walletList} />
          <QuickListGames gameListTitle="Crypto Games" gameList={walletList} />
          <QuickListGames gameListTitle="Table Games" gameList={walletList} />
          <QuickListGames gameListTitle="Game Shows" gameList={walletList} /> */}
        </div>
      </div>
    </MainComponents>
  )
}
