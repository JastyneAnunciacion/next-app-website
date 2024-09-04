import ImageResponsive from '@/app/components/ImageResponsive'
import MainComponents from '@/app/components/MainComponents'
import SelectionButtonsWithIcons from '@/app/components/SelectionButtonsWithIcons'
import React from 'react'

const WalletPage = () => {
    return (
        <MainComponents currentPage='Wallet'>
            <div className='text-white font-montserrat font-medium'>
                <div className='w-full flex flex-col'>
                    <div className='flex items-center gap-[0.47%] mb-[1.86%]'>
                        <ImageResponsive src='/images/gradient-purple-wallet-image.png' alt='Wallet Logo' width='1.87%' />
                        <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Wallet</p>
                    </div>
                </div>
                <div className='relative  w-full'>
                    <div className='absolute bg-[#1B1237] w-[16.26%] p-[0.93%] rounded-[5px]'>
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-drawer-image.png'
                            selectedIconSrc='/images/drawer-image.png'
                            buttonText='Balance'
                            isSelected={true}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-deposit-image.png'
                            selectedIconSrc='/images/deposit-image.png'
                            buttonText='Deposit'
                            isSelected={false}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-withdraw-image.png'
                            selectedIconSrc='/images/withdraw-image.png'
                            buttonText='Withdraw'
                            isSelected={false}
                        />
                        <SelectionButtonsWithIcons
                            defaultIconSrc='/images/violet-buy-crypto-image.png'
                            selectedIconSrc='/images/buy-crypto-image.png'
                            buttonText='Buy Crypto'
                            isSelected={false}
                            isLast={true}
                        />
                    </div>
                    <div className='absolute right-0 w-[82.334%]'>
                        <div className='w-full aspect-[881/80] bg-[#241A43] rounded-[5px]'>

                        </div>
                        <div className='w-full bg-[#241A43] rounded-[5px]'>

                        </div>
                    </div>
                </div>
                <div className='w-full aspect-[107/130]' />
            </div>
        </MainComponents>
    )
}

export default WalletPage