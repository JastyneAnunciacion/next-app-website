import React from 'react'
import Searchbar from '@/app/components/Searchbar'
import QuickListGames from '@/app/components/Quicklist/QuickListGames'
import list from '@/app/components/wallet-list.json'
import QuickListProviders from '@/app/components/Quicklist/QuickListProviders'
import RealTimeBetWinners from '@/app/components/RealTimeBetWinners/RealTimeBetWinners'
import BoxBanner from '@/app/components/Banners/BoxBanner'
import MainComponents from '@/app/components/MainComponents'

const CasinoPage = () => {
    return (
        <MainComponents currentPage='Casino'>
            <div className='w-full mt-5 flex flex-col gap-5'>
                <div className='flex w-full justify-between'>
                    <BoxBanner
                        title='BONUS'
                        highlightText='200% Rakeback'
                        miniDescription='200% rakeback bonus up to 10 ETH + 50 Free Spins'
                        buttonText='Deposit Now'
                    />
                    <BoxBanner
                        title='AIRDROP'
                        highlightText='Season 2 Airdrop Finale'
                        miniDescription='Earn your share of a $1,500,000 of Eth! Rewards to all active players!'
                        buttonText='Find out more'
                    />
                    <BoxBanner
                        title='COMMUNITY'
                        highlightText='Join our Community'
                        miniDescription='Chat with like-minded players and share your big wins!'
                        buttonText='Get link on Telegram'
                    />
                </div>
                <div className='w-full border'>
                    <Searchbar />
                </div>
                <div className='w-full flex flex-col gap-5'>
                    <QuickListGames gameListTitle='Popular' gameList={list} />
                    <QuickListGames gameListTitle='Slots' gameList={list} />
                    <QuickListProviders providerList={list} />
                    <QuickListGames gameListTitle='Live Casino' gameList={list} />
                    <QuickListGames gameListTitle='Bonus Buy' gameList={list} />
                    <QuickListGames gameListTitle='New Casino' gameList={list} />
                </div>
                <RealTimeBetWinners />
            </div>
        </MainComponents>
    )
}

export default CasinoPage