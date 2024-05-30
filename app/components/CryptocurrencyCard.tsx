import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const CryptocurrencyCard = () => {
    return (
        <div className='flex items-center justify-between p-10 gap-2 w-full h-28 border-2 border-orange-500 border-dashed overflow-hidden'>
            <p className='text-white text-lg w-60'>Play using your favourite cryptocurrency</p>
            <div className='flex gap-4'>
                <div className='shrink-0'>
                    <Image src={basePath + '/images/tokens/BTC-icon.png'} alt="Token Icon" width={35} height={35} />
                </div>
                <div className='shrink-0'>
                    <Image src={basePath + '/images/tokens/ETH-icon.png'} alt="Token Icon" width={35} height={35} />
                </div>
                <div className='shrink-0'>
                    <Image src={basePath + '/images/tokens/SOL-icon.png'} alt="Token Icon" width={35} height={35} />
                </div>
                <div className='shrink-0'>
                    <Image src={basePath + '/images/tokens/USDT-icon.png'} alt="Token Icon" width={35} height={35} />
                </div>
            </div>
            <button className='bg-orange-600 text-white text-glow p-2 h-12 rounded-lg font-semibold'>
                Get Started
            </button>
        </div>
    )
}

export default CryptocurrencyCard