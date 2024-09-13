import React from 'react'
import ImageResponsive from '../../ImageResponsive'
import CopyTextTemplate from '../../Copy/CopyTextTemplate';
import SelectionDropdown from '../../Dropdown/SelectionDropdown';
import WalletDropdown from '../WalletDropdown';

const Deposit = () => {
    const networkOptions = [
        { value: 'TRC-20' },
        { value: 'ERC-20' },
        { value: 'BEP-20' },
    ]

    const networks = networkOptions.map(networkOption => ({
        content: networkOption.value,
        onClick: () => {
            console.log(`Selected option: ${networkOption.value}`);
        }
    }));

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
                <p className='ml-[1.25vw] text-[4.17vw]'>Select Network</p>
                <div className='h-[12.5vw]'>
                    <SelectionDropdown
                        items={networks}
                        placeArrowOnRight={true}
                    />
                </div>
            </div>

            <div className='flex flex-col gap-[2.08vw]'>
                <div className='flex gap-[1.46vw] items-center'>
                    <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                        <ImageResponsive src='/images/credit-card-image.png' alt='Header Icon' width='3.13vw' aspectWidth={15} aspectHeight={11} />
                    </div>
                    <p className='text-[4.17vw]'>Express Deposit</p>
                </div>
                <p className='text-[#D187FF]'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>
                <div className='flex w-full items-center gap-[2.29vw]'>
                    <button className={`border-[#3B335D] border rounded-lg w-[44.79vw] aspect-[215/49] flex justify-center items-center gap-[2.08vw]`}>
                        <ImageResponsive src='/images/safe-purple-image.png' alt='Safe Icon' width='3.87vw' aspectWidth={18.57} aspectHeight={20} />
                        <p className='text-[#D187FF]'>Wallet</p>
                    </button>
                    <button className={`border-[#3B335D] border rounded-lg w-[44.79vw] aspect-[215/49] flex justify-center items-center gap-[2.45vw]`}>
                        <ImageResponsive src='/images/tip-jar-purple-image.png' alt='Tip Jar Icon' width='3.09vw' aspectWidth={14.82} aspectHeight={21} />
                        <p className='text-[#D187FF]'>@CryptoBot</p>
                    </button>
                </div>
            </div>

            <div>
                <div className='flex flex-col gap-[2.08vw]'>
                    <div className='flex gap-[1.46vw] items-center'>
                        <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
                            <ImageResponsive src='/images/credit-card-image.png' alt='Header Icon' width='3.13vw' aspectWidth={15} aspectHeight={11} />
                        </div>
                        <p className='text-[4.17vw]'>Deposit through Blockchain</p>
                    </div>
                    <p className='text-[#D187FF]'>You can deposit through Telegram Bots. Choose one of the bots shown below.</p>

                    <div className='w-full rounded-[10px] aspect-[441/60] flex items-center bg-[#241A43] justify-between pl-[3.75vw] pr-[2.5vw] gap-[1.67vw]'>
                        <CopyTextTemplate textToCopy='exampleDepositAddressCodeCopyLink' copyIconWidth='38.46%' copyButtonWidth='8.84%' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deposit