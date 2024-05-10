'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import QuickBonusItem from './QuickBonusItem'

const QuickBonusButton = () => {
    const [isBonusesOpen , setOpenBonuses] = useState(false);
  return (
    <div className='relative'>
        <button onClick={() => setOpenBonuses(prev => !prev)} className='h-10 w-28 bg-gray-300 rounded-xl flex items-center justify-center gap-2'>
            <div className='relative'>
                <Image src={`${basePath}/images/temporary-image.png`} alt='Bonus Icon' width={25} height={25} />
                <div className='absolute bottom-4 left-3 h-3 w-4 bg-green-600 flex items-center justify-center text-white text-xs border border-black rounded-md'>
                    2
                </div>
            </div>
            <p className='font-semibold text-sm'>Bonuses</p>
        </button>

        {isBonusesOpen && 
            <div className='absolute w-[350px] rounded-b-xl bg-gray-700 text-white p-3 flex flex-col gap-2 overflow-hidden z-10'>
                <div className='flex gap-1 items-center'> 
                    <h1 className='font-bold text-lg'>Available Bonuses</h1>
                    <p>2/8</p>
                </div>
                <QuickBonusItem 
                title='Free Wheel Spin' 
                active={true}
                subTitle='Spin Available' 
                hasSubTitleColor={true} 
                subTitleActiveColor='green-500'
                subTitleDeactiveColor='gray-500' 
                bonusType='ButtonType'
                buttonActiveText='Spin'
                buttonDeactiveText='02:11:59'
                />
                <QuickBonusItem 
                title='100FS * $0.2 in The Dog House Slot' 
                active={true}
                bonusType='ButtonType'
                buttonActiveText='Deposit'
                />
                <QuickBonusItem 
                title='Calendar Bonus' 
                active={false}
                bonusType='ButtonType'
                buttonActiveText='Claim'
                buttonDeactiveText='02:11:59'
                />
                <QuickBonusItem 
                title='Rakeback' 
                active={false}
                bonusType='ButtonType'
                buttonActiveText='Claim'
                buttonDeactiveText='No rewards yet'
                />
                <QuickBonusItem 
                title='Cashback' 
                active={false}
                bonusType='ButtonType'
                buttonActiveText='Claim'
                buttonDeactiveText='No rewards yet'
                />
                <QuickBonusItem 
                title='Weekly Bonus' 
                active={false}
                bonusType='CompletionType'
                buttonActiveText='Claim'
                buttonDeactiveText='No rewards yet'
                completionCurrentValue={0}
                completionMaxValue={150}
                />
                <QuickBonusItem 
                title='Weekly Sport Bonus' 
                active={false}
                bonusType='CompletionType'
                buttonActiveText='Claim'
                buttonDeactiveText='No rewards yet'
                completionCurrentValue={0}
                completionRewardText="$3"
                completionMaxValue={150}
                />
                <QuickBonusItem 
                title='Monthly Bonus' 
                active={false}
                bonusType='ButtonType'
                buttonActiveText='Claim'
                buttonDeactiveText='21 d 22:11:59'
                />

                <button className='w-full h-12 bg-blue-500 rounded-md font-bold mt-2'>
                    View All Bonuses
                </button>
            </div>
        }
    </div>
  )
}

export default QuickBonusButton