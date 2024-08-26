// file: components/RealTimeBetWinnersListItem.tsx

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath';

interface RealTimeBetWinnersListItemProps {
    userName?: string,
    betAmount?: number,
    betTokenImgSrc?: string,
    multiplier?: number,
    payout?: number,
    isEvenInList: boolean
}

const RealTimeBetWinnersListItem = ({
    userName = 'Us****me',
    betAmount = 0.00000,
    betTokenImgSrc = '/images/tokens/thin-purple-BTC-icon.png',
    multiplier = 1,
    payout = 0.00000,
    isEvenInList
}: RealTimeBetWinnersListItemProps) => {

    const gameNames = [
        'Sweet Bonanza',
        'Gates of Olympus 1000',
        'Rip City',
        'Wanted Dead or a Wild',
        'Sugar Rush 1000',
        'Zeus VS Hades Gods of War',
        '2 Wild 2 Die'
    ];

    const [tempGameName, setTempGameName] = useState<string>('');
    const [tempBetAmount, setTempBetAmount] = useState<string>('0.0000');
    const [tempMultiplier, setTempMultiplier] = useState<string>('1.00');
    const [tempPayout, setTempPayout] = useState<string>('0.0000');

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * gameNames.length);
        setTempGameName(gameNames[randomIndex]);

        const generatedBetAmount = (Math.random() * (2 - 0.1) + 0.1).toFixed(4);
        setTempBetAmount(generatedBetAmount);

        const generatedMultiplier = (Math.random() * (4 - 0.25) + 0.25).toFixed(2);
        setTempMultiplier(generatedMultiplier);

        const generatedPayout = (Math.random() * (8) - 4).toFixed(4);
        setTempPayout(generatedPayout);

    }, []);

    const numericPayout = parseFloat(tempPayout);

    return (
        <div className={`w-full aspect-[103/4] ${isEvenInList && 'bg-[#130C28] rounded-xl'}`}>
            <div className='w-full h-full grid grid-cols-5 items-center px-[0.69vw] text-[0.83vw]'>
                <div className='flex h-full items-center gap-[0.35vw]'>
                    <div className='h-[62.5%] aspect-square'>
                        <Image src={`${basePath}/images/xs-game-icon-5.png`} alt="Game Icon" layout='responsive' width={100} height={100} />
                    </div>
                    <p className='text-nowrap overflow-hidden text-ellipsis'>{tempGameName}</p>
                </div>
                <p className='flex justify-center items-center'>{userName}</p>
                <div className='flex gap-[0.35vw] items-center justify-center'>
                    <p>{tempBetAmount}</p>
                    <div className='shrink-0'>
                        <Image src={`${basePath + betTokenImgSrc}`} alt='Token Icon' width={15} height={15} />
                    </div>
                </div>
                <p className='flex justify-center items-center'>{'x' + tempMultiplier}</p>
                <div className='flex gap-[0.35vw] items-center justify-end'>
                    <p className={`flex items-center ${numericPayout < 0 ? 'text-red-500' : 'text-green-500'}`}>
                        {numericPayout > 0 ? '+' : ''}{tempPayout}
                    </p>
                    <div className='shrink-0'>
                        <Image src={`${basePath + betTokenImgSrc}`} alt='Token Icon' width={15} height={15} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RealTimeBetWinnersListItem