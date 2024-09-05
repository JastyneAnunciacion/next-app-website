'use client'

import React, { useEffect, useState } from 'react'
import ImageResponsive from '../ImageResponsive'

interface WalletListItemProps {
    tokenImageSrc: string
    tokenName: string
    tokenValue: string
}

const WalletListItem = ({ tokenImageSrc, tokenName, tokenValue }: WalletListItemProps) => {
    //remove when actual data is available
    const [tempValue, setTempValue] = useState<number>(0.00);

    useEffect(() => {
        const generatedValue = parseFloat((Math.random() * 1000).toFixed(2));
        setTempValue(generatedValue);
    }, []);
    //remove when actual data is available

    return (
        <div className='w-full bg-[#1C1634] px-[1.83%] py-[1.1%] flex items-center rounded-[5px]'>
            <ImageResponsive src={tokenImageSrc} alt='Token icon' width='2.78%' />
            <p className='font-bold ml-[1.89%]'>{tokenName}</p>
            <p className='ml-auto'>{tempValue}</p>
            <button className='mx-[2.53%] font-normal text-[#02CC00] text-[0.69vw ]'>Deposit</button>
            <button className='font-normal text-[#02CC00] text-[0.69vw ]'>Withdraw</button>
        </div>
    )
}

export default WalletListItem