import ImageResponsive from '@/app/components/ImageResponsive'
import MainComponents from '@/app/components/MainComponents'
import Searchbar from '@/app/components/Searchbar'
import SelectionButtonsWithIcons from '@/app/components/SelectionButtonsWithIcons'
import Toggle from '@/app/components/Toggle'
import WalletList from '@/app/components/Wallet/WalletList'
import WalletListItem from '@/app/components/Wallet/WalletListItem'
import React from 'react'
import walletList from '@/app/components/wallet-list.json'

const WalletPage = () => {
    return (
        <MainComponents currentPage='Wallet'>
            <div className='text-white font-montserrat font-medium text-[0.83vw]'>
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
        </MainComponents>
    )
}

export default WalletPage