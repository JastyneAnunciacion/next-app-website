import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import WalletDropdown from '../WalletDropdown'
import ImageResponsive from '../../ImageResponsive'

const Withdraw = () => {
    return (
        <div className='flex flex-col gap-[5vw]'>
            <div className='flex flex-col gap-[2.08vw]'>
                <p className='ml-[1.25vw] text-[4.17vw]'>Select Currency</p>
                <div className='h-[13.12vw]'>
                    <WalletDropdown
                        paddingLeft='3.96vw'
                        paddingRight='4.79vw'
                        arrowBoxSize='7.5vw'
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[1.46vw] items-center'>
                    <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                        <ImageResponsive src='/images/credit-card-image.png' alt='Header Icon' width='3.13vw' aspectWidth={15} aspectHeight={11} />
                    </div>
                    <p className='text-[4.17vw]'>Withdraw through Blockchain</p>
                </div>
                <p className='text-[#D187FF]'>Direct withdrawal trough blockchain can take up to 10 minutes. Please be patient!</p>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <p className='text-[#C4C4C4] ml-[1.25vw] text-[4.17vw]'>Withdrawal Address</p>
                <input placeholder='Enter your address here' className='w-full bg-[#241A43] h-[12.5vw] rounded-lg flex items-center pl-[3.96vw] [&::-webkit-inner-spin-button]:appearance-none outline-none placeholder-white' />
            </div>

            <div className='flex flex-col'>
                <div className='flex justify-between items-center mb-[2.08vw]'>
                    <p className='text-[#C4C4C4] ml-[1.25vw] text-[4.17vw]'>Withdrawal Amount</p>
                    <div className='text-responsive-sm flex gap-[1.25vw] items-center'>
                        <p className='text-[#C4C4C4]'>Available:</p>
                        <div className='flex gap-[1.04vw] items-center shrink-0'>
                            <div className='w-[4.17vw] aspect-square'>
                                <Image src={`${basePath}/images/tokens/thin-purple-BTC-icon.png`} alt='Buy Crypto Icon' layout='responsive' width={100} height={100} />
                            </div>
                            <p className='text-[2.92vw]'>10</p>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-[#241A43] h-[12.5vw] rounded-lg mb-[1.04vw] text-white flex items-center justify-between pl-[4.17vw] pr-[2.08vw]'>
                    <div className='flex gap-[2.29vw] items-center'>
                        <div className='w-[6.25vw] aspect-square'>
                            <Image src={`${basePath}/images/tokens/thin-purple-BTC-icon.png`} alt='Token Icon' layout='responsive' width={100} height={100} />
                        </div>
                        <input placeholder='0.00' className='w-full text-[4.17vw] bg-transparent placeholder:text-white [&::-webkit-inner-spin-button]:appearance-none outline-none' type='number' />
                    </div>
                    <div className='flex gap-[1.04vw]'>
                        <button className='bg-[#352C58] w-[12.5vw] aspect-[20/13] flex items-center justify-center rounded-xl'>25%</button>
                        <button className='bg-[#352C58] w-[12.5vw] aspect-[20/13] flex items-center justify-center rounded-xl'>50%</button>
                        <button className='bg-[#352C58] w-[12.5vw] aspect-[20/13] flex items-center justify-center rounded-xl'>100%</button>
                    </div>
                </div>

                <div className='flex gap-[1.66vw] items-center mb-[4.16vw]'>
                    <p className='ml-[2.08vw] text-responsive-xs text-[#D187FF]'>Minimal withdrawal: </p>
                    <div className='flex gap-[1.04vw] items-center shrink-0'>
                        <div className='w-[4.17vw] aspect-square'>
                            <Image src={`${basePath}/images/tokens/thin-purple-BTC-icon.png`} alt='Buy Crypto Icon' layout='responsive' width={100} height={100} />
                        </div>
                        <p className='text-[2.92vw]'>1</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-[#736260] via-[#CBADA9] to-[#655654] w-full h-[10.20vw] p-[0.21vw] rounded-lg'>
                    <button className='flex items-center gap-[1.82vw] justify-center bg-gradient-to-r from-[#DCA39B] to-[#765753] w-full h-full rounded-3xl'>
                        <div className='shrink-0 w-[3.09vw] aspect-[14.82/21]'>
                            <Image src={`${basePath}/images/tip-jar-image.png`} alt='Withdraw Icon' layout='responsive' width={100} height={100} />
                        </div>
                        <p className='font-bold text-[2.92vw]'>Withdraw</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Withdraw