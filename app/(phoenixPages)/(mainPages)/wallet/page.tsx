'use client'

import ImageResponsive from '@/app/components/ImageResponsive'
import Searchbar from '@/app/components/Searchbar'
import SelectionButtonsWithIcons from '@/app/components/SelectionButtonsWithIcons'
import Toggle from '@/app/components/Toggle'
import WalletList from '@/app/components/Wallet/WalletList'
import WalletListItem from '@/app/components/Wallet/WalletListItem'
import React, { useState } from 'react'
import walletList from '@/app/components/temporaryJsons/wallet-list.json'
import Deposit from '@/app/components/Wallet/WalletMobile/Deposit'
import Withdraw from '@/app/components/Wallet/WalletMobile/Withdraw'
import BuyCrypto from '@/app/components/Wallet/WalletMobile/BuyCrypto'

const WalletPage = () => {
    const [option, changeOption] = useState(0);
    return (
        <>
            {/* Web Ver */}
            <div className='text-white font-montserrat font-medium text-[0.83vw] hidden lg:block'>
                <div className='w-full flex flex-col'>
                    <div className='flex items-center gap-[0.47%] mb-[1.86%]'>
                        <ImageResponsive src='/images/gradient-purple-wallet-image.png' alt='Wallet Logo' width='1.87%' />
                        <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Wallet</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='bg-[#1B1237] w-[16.26%] h-fit p-[0.93%] rounded-[5px]'>
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-drawer-image.png'
                            selectedIconSrc='/images/drawer-image.png'
                            iconWidth='12.1%'
                            iconAspectWidth={15}
                            iconAspectHeight={13.85}
                            buttonText='Balance'
                            isSelected={true}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-deposit-image.png'
                            selectedIconSrc='/images/deposit-image.png'
                            iconWidth='12.1%'
                            iconAspectWidth={15}
                            iconAspectHeight={13.39}
                            buttonText='Deposit'
                            isSelected={false}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-withdraw-image.png'
                            selectedIconSrc='/images/withdraw-image.png'
                            iconWidth='12.9%'
                            iconAspectWidth={16}
                            iconAspectHeight={11.44}
                            buttonText='Withdraw'
                            isSelected={false}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-buy-crypto-image.png'
                            selectedIconSrc='/images/buy-crypto-image.png'
                            iconWidth='12.1%'
                            iconAspectWidth={15}
                            iconAspectHeight={15.05}
                            buttonText='Buy Crypto'
                            isSelected={false}
                            isLast={true}
                        />
                    </div>

                    <div className='w-[82.334%]'>
                        <div className='w-full aspect-[881/80] bg-[#241A43] rounded-[5px] mb-[0.57%] flex items-center px-[3.97%]'>
                            <ImageResponsive src='/images/stacked-coins-image.png' alt='Stacked Coins Image' width='2.84%' />
                            <div className='ml-[0.57%] mr-[3.97%]'>
                                <p className='leading-[122.91%]'>Total Balance</p>
                                <p className='text-[1.11vw] text-[#FFBF39] font-bold leading-[121.88%]'>$0.00</p>
                            </div>
                            <div className='h-[62.5%] w-[1px] bg-[#2F2551] shrink-0' />
                            <div className='ml-[3.97%] mr-[4.54%]'>
                                <p className='leading-[122.91%]'>Real Money</p>
                                <p className='text-[1.11vw] font-bold leading-[121.88%]'>$0.00</p>
                            </div>
                            <div>
                                <p className='leading-[122.91%]'>Bonus Money</p>
                                <p className='text-[1.11vw] font-bold leading-[121.88%]'>$0.00</p>
                            </div>
                        </div>

                        <div className='w-full bg-[#241A43] rounded-[5px] px-[3.41%] pb-[3.41%] pt-[2.72%] '>
                            <div className='relative w-full aspect-[821/30] flex items-center mb-[3.29%]'>
                                <div className='absolute text-[#AEA8BE] text-nowrap w-full'>
                                    <Toggle toggleText='Hide 0 balance' placeTextLeft={true} toggleWidth='3.65%' aspectWidth={15} aspectHeight={7} />
                                </div>

                                <div className='absolute right-0 w-[28.75%] aspect-[118/15]'>
                                    <Searchbar bgColor='#2F2352' hasborder={false} />
                                </div>
                            </div>
                            <WalletList title='Flat Currency'>
                                <WalletListItem tokenImageSrc='/images/tokens/thin-purple-BTC-icon.png' tokenName='USD' tokenValue='0.00' />
                                <WalletListItem tokenImageSrc='/images/tokens/thin-purple-BTC-icon.png' tokenName='EUR' tokenValue='0.00' />
                            </WalletList>
                            <div className='w-[2.27%] aspect-square' />
                            <WalletList title='Crypto Currency'>
                                {walletList.map((item, index) => (
                                    <WalletListItem key={index} tokenImageSrc={item.TokenIconSrc} tokenName={item.Token} tokenValue={item.Amount} />
                                ))}
                            </WalletList>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Ver */}
            <div className='lg:hidden w-full max-w-[91.88%] font-manrope font-medium text-[3.33vw]'>
                <div className='flex items-center justify-between w-full h-[6.74vh] rounded-lg  bg-[#241A43] mb-[2.08vw]'>
                    <p className='flex justify-center items-center w-full text-[#D187FF] text-[4.17vw] font-semibold'>Wallet</p>
                </div>

                <div className='flex w-full h-[10.21vw] mb-[5vw] justify-between items-center border border-[#3B335D] text-nowrap rounded-lg'>
                    <div className={`${option === 0 && 'bg-gradient-to-r from-[#64596C] via-[#BCA9CB] to-[#5E5465] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full `}>
                        <button onClick={() => changeOption(0)}
                            className={`${option === 0 ? 'bg-gradient-to-r from-[#B89BDC] to-[#664195] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[2.09vw]`}>
                            <ImageResponsive src={`/images/${option === 0 ? 'safe-image.png' : 'safe-purple-image.png'}`} alt='Deposit Icon' width='3.87vw' aspectWidth={18.57} aspectHeight={20} />
                            <p>Deposit</p>
                        </button>
                    </div>
                    <div className={`${option === 1 && 'bg-gradient-to-r from-[#736260] via-[#CBADA9] to-[#655654] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full`}>
                        <button onClick={() => changeOption(1)}
                            className={`${option === 1 ? 'bg-gradient-to-r from-[#DCA39B] to-[#765753] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[1.82vw]`}>
                            <ImageResponsive src={`/images/${option === 1 ? 'tip-jar-image.png' : 'tip-jar-purple-image.png'}`} alt='Deposit Icon' width='3.09vw' aspectWidth={14.82} aspectHeight={21} />
                            <p>Withdraw</p>
                        </button>
                    </div>
                    <div className={`${option === 2 && 'bg-gradient-to-r from-[#607073] via-[#A9C7CB] to-[#546265] p-[0.21vw] rounded-lg'} w-[29.17vw] h-full`}>
                        <button onClick={() => changeOption(2)}
                            className={`${option === 2 ? 'bg-gradient-to-r from-[#8CCEF4] to-[#4C8293] rounded-lg text-white' : 'rounded-lg text-[#D187FF]'} h-full w-full flex justify-center items-center gap-[1.84vw]`}>
                            <ImageResponsive src={`/images/tokens/${option === 2 ? 'BTC-fancy-outline-icon.png' : 'BTC-fancy-outline-purple-icon.png'}`} alt='Deposit Icon' width='3.28vw' aspectWidth={15.75} aspectHeight={21} />
                            <p>Buy Crypto</p>
                        </button>
                    </div>
                </div>
                {option === 0 && <Deposit />}
                {option === 1 && <Withdraw />}
                {option === 2 && <BuyCrypto />}
            </div>
        </>
    )
}

export default WalletPage