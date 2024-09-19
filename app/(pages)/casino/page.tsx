'use client'

import React, { useEffect } from 'react'
import Searchbar from '@/app/components/Searchbar'
import QuickListGames from '@/app/components/Quicklist/QuickListGames'
import RealTimeBetWinners from '@/app/components/RealTimeBetWinners/RealTimeBetWinners'
import GameBanner from '@/app/components/Banners/GameBanner'
import ReferralBanner from '@/app/components/Banners/ReferralBanner'
import walletList from "../../components/temporaryJsons/wallet-list.json"
import SorterButton from '@/app/components/SorterButton'
import { useRouter } from 'next/navigation'


const CasinoPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                if (window.innerWidth < 1024) {
                    router.push('/');
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [router]);

    return (
        <>
            <div className='w-full flex flex-col gap-[2.08vw]'>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='w-full flex gap-[1.40%] items-center justify-center mb-[1.04vw]'>
                        <GameBanner imgSrc='/images/4xl-game-icon-1.png' />
                        <ReferralBanner />
                        <GameBanner imgSrc='/images/4xl-game-icon-2.png' />
                    </div>
                    <div className='w-full h-[2.78vw] text-[0.83vw] mb-[0.93vw]'>
                        <Searchbar placeholderText='Game name | Provider' />
                    </div>
                    <div className='w-full flex gap-[0.93%]'>
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                        <SorterButton />
                    </div>
                </div>
                <div className='flex flex-col gap-[2.10vw]'>
                    <QuickListGames
                        headerImgSrc='/images/gradient-purple-cards-image.png'
                        gameListTitle='Popular Games'
                        gameList={walletList}
                        rows={1}
                    />
                    <QuickListGames
                        headerImgSrc='/images/gradient-purple-cards-image.png'
                        gameListTitle='Popular Games'
                        gameList={walletList}
                        rows={1}
                    />
                    <QuickListGames
                        headerImgSrc='/images/gradient-purple-cards-image.png'
                        gameListTitle='Popular Games'
                        gameList={walletList}
                        rows={1}
                    />
                </div>
                <RealTimeBetWinners />
            </div>
        </>
    )
}

export default CasinoPage