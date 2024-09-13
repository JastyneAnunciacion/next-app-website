import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import CurrencyDropdown from '../../Dropdown/CurrencyDropdown'
import ImageResponsive from '../../ImageResponsive'

const BuyCrypto = () => {
    return (
        <div className='flex flex-col gap-[4.17vw]'>
            <div className='flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[1.46vw] items-center'>
                    <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                        <ImageResponsive src='/images/credit-card-image.png' alt='Header Icon' width='3.13vw' aspectWidth={15} aspectHeight={11} />
                    </div>
                    <p className='text-[4.17vw]'>Buy Crypto</p>
                </div>
                <p className='text-[#d187ff9C]'>Buy crypto instantly, and have it automatically transferred to your wallet. Services related to payments are provided by a separate platform which is owned by a third party.</p>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <p className='ml-[1.25vw] text-[#C4C4C4]'>Your Pay</p>
                <div className='h-[13.125vw] w-full'>
                    <CurrencyDropdown />
                </div>
            </div>

            <div className='flex flex-col gap-[0.625vw] mb-[1.46vw]'>
                <div className='h-[12.5vw] rounded-t-lg bg-[#241A43] flex items-center px-[3.96vw]'>
                    <p className='text-[#836FCD]'>Provider</p>
                </div>
                <div className='h-[12.5vw] rounded-b-lg bg-[#241A43] flex items-center px-[3.96vw]'>
                    <p className='text-[#836FCD]'>Methods</p>
                </div>
            </div>

            <div className='bg-gradient-to-r from-[#607073] via-[#A9C7CB] to-[#546265] w-full h-[10.20vw] p-[0.21vw] rounded-lg mb-[8.33vw]'>
                <button className='flex items-center gap-[1.83vw] justify-center bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] w-full h-full rounded-lg'>
                    <div className='shrink-0 w-[3.08vw] aspect-[14.82/21]'>
                        <Image src={`${basePath}/images/tip-jar-image.png`} alt='Buy Crypto Icon' layout='responsive' width={100} height={100} />
                    </div>
                    <p className='font-bold text-[2.92vw]'>Buy Crypto</p>
                </button>
            </div>

            <div className='bg-[#23213C] rounded-xl text-[#637AF4] h-[15.42vw] px-[5.21vw] flex items-center'>
                <p>Depending on the blockchain network, the purchase may take a few minutes to arrive.</p>
            </div>
        </div>
    )
}

export default BuyCrypto