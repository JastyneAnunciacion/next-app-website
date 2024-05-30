import BigBannerSlider from './components/Banners/BigBannerSlider'
import CryptocurrencyCard from './components/CryptocurrencyCard'
import MainComponents from './components/MainComponents'
import QuickListGames from './components/Quicklist/QuickListGames'
import QuickListProviders from './components/Quicklist/QuickListProviders'
import RealTimeBetWinners from './components/RealTimeBetWinners/RealTimeBetWinners'
import ShortcutCards from './components/ShortcutCards'
import walletList from "./components/wallet-list.json"

export default function Home() {
  return (
    <MainComponents>
      <BigBannerSlider />
      <div className='flex w-full gap-6 justify-between'>
        <ShortcutCards imgSrc='' title='Casino' description={`Bonus buys, big multipliers and all the latest slots and table games.`} buttonText='Go To Casino' />
        <ShortcutCards imgSrc='' title='Sports' description={`All the biggest sports action. Pre-match & in-play betting on football, tennis and much more.`} buttonText='Go To Sports' />
        <ShortcutCards imgSrc='' title='Instant Signup' description={`Get signed up in seconds with our lightning quick sign up process.`} buttonText='Sign Up Now' />
        <ShortcutCards imgSrc='' title='Telegram Casino' description={`Exclusive gaming at your chat's edge with our streamlined Telegram Casino.`} buttonText='Play on Telegram' />
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
