import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import ImageResponsive from './ImageResponsive'

const Footer = () => {
    return (
        <>
            {/* Web Version */}
            <div className='relative w-full h-[14.31vw] hidden lg:flex justify-center text-white'>
                <div className='absolute flex flex-col w-full h-full gap-[1.66vw]'>
                    <div className='w-full flex gap-[1.38%] items-center'>
                        <div className='w-[4.21%] aspect-square'>
                            <Image className='rounded-full' src={`${basePath}/images/purple-phx-gamble-logo.png`} alt="Footer Main Logo" layout='responsive' width={100} height={100} />
                        </div>
                        <p className='font-offside text-[1.66vw]'>Phoenix Game</p>
                    </div>
                    <p className='w-[31.31%] text-[1.11vw] text-[#625873]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className='absolute w-full h-full flex justify-end gap-[6.07%]'>
                    <div className='flex flex-col gap-[1.53vw]'>
                        <p className='text-[1.52vw]'>More</p>
                        <div className='text-[1.11vw] text-[#625873] flex flex-col gap-[0.69vw]'>
                            <p className='hover:underline cursor-pointer'>Download</p>
                            <p className='hover:underline cursor-pointer'>FAQ</p>
                            <p className='hover:underline cursor-pointer'>Rank</p>
                            <p className='hover:underline cursor-pointer'>Newsletter</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[1.53vw]'>
                        <p className='text-[1.52vw] '>Important Links</p>
                        <div className='text-[1.11vw] text-[#625873] flex flex-col gap-[0.69vw]'>
                            <p className='hover:underline cursor-pointer'>About us</p>
                            <p className='hover:underline cursor-pointer'>Questions</p>
                            <p className='hover:underline cursor-pointer'>Contact us</p>
                            <p className='hover:underline cursor-pointer'>Legal</p>
                        </div>
                    </div>
                </div>

                <div className='absolute w-full h-full flex items-end'>
                    <button className='w-[2.15%] aspect-square'>
                        <ImageResponsive src='/images/purple-x-image.png' alt='Footer Twitter Logo' width='100%' />
                    </button>
                </div>
            </div>

            {/* Mobile Ver */}
            <div className='lg:hidden w-full'>
                <div className='w-full border-t border-[#34375F]' />
                <div className='flex flex-col items-center gap-[3.33vw] px-[4.79vw] text-center text-[#C0C0C0] py-[5vw] text-[2.91vw] font-montserrat'>
                    <p>All rights reserved - © Phoenix Game [v0.1.1]</p>
                    <p>1 TON = 5.69</p>
                    <p>Terms and conditions - Responsible Gaming - AML Policy - Restricted jurisdictions - Fairness - FAQ - Support</p>
                    <button className='bg-[#2A2444] w-[22.7vw] aspect-[109/43] rounded-[10px] text-white text-[3.54vw] font-manrope'>English</button>
                </div>
                <div className='w-full border-t border-[#34375F]' />
                <div className='flex items-center justify-center gap-[14.37vw] py-[6.66vw]'>
                    <button className='w-[7.5vw] aspect-square'>
                        <ImageResponsive src='/images/tokens/grayscale-AVAX-icon.png' alt='Grayscale AVAX icon' width='100%' />
                    </button>
                    <button className='w-[7.5vw] aspect-square'>
                        <ImageResponsive src='/images/tokens/grayscale-BTC-icon.png' alt='Grayscale BTC icon' width='75%' aspectWidth={27} aspectHeight={36} />
                    </button>
                    <button className='w-[7.5vw] aspect-square'>
                        <ImageResponsive src='/images/tokens/grayscale-SOL-icon.png' alt='Grayscale SOL icon' width='100%' aspectWidth={36} aspectHeight={27} />
                    </button>
                    <button className='w-[7.5vw] aspect-square'>
                        <ImageResponsive src='/images/tokens/grayscale-ETH-icon.png' alt='Grayscale ETH icon' width='60.58%' aspectWidth={21.81} aspectHeight={35.8} />
                    </button>
                </div>
                <div className='w-full border-t border-[#34375F]' />
                <div className='flex text-white text-[1.66vw] items-center justify-center gap-[3.33vw] mt-[6.66vw]'>
                    <ImageResponsive
                        src='/images/purple-phx-gamble-logo.png'
                        alt='Language Icon'
                        width='16.04vw'
                        aspectWidth={77}
                        aspectHeight={75.29}
                    />
                    <div className='flex gap-[2vw] text-[5vw] font-offside text-nowrap'>
                        <p className='text-[#B767FA]'>Phoenix</p>
                        <p>Game</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer