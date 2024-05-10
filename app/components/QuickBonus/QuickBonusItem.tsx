import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface QuickBonusItemProps {
    imgSrc?: string,
    title: string,
    active?: boolean,
    subTitle?: string,
    hasSubTitleColor?: boolean,
    subTitleActiveColor?: string,
    subTitleDeactiveColor?: string,
    bonusType: "ButtonType" | "CompletionType"
    buttonActiveText?: string,
    buttonDeactiveText?: string,
    hasCompletionBar?: boolean,
    completionCurrentValue?: number,
    completionMaxValue?: number,
    completionRewardImgSrc?: string,
    completionRewardText?:string,
}

const QuickBonusItem = ({imgSrc, title, active, subTitle, hasSubTitleColor, subTitleActiveColor, subTitleDeactiveColor, bonusType, buttonActiveText, buttonDeactiveText, hasCompletionBar, completionCurrentValue, completionMaxValue, completionRewardImgSrc, completionRewardText}: QuickBonusItemProps) => {
    const QuickBonusImgSrc = imgSrc ? `${basePath + imgSrc}` : `${basePath}/images/temporary-image.png`;
    const SubtitleColor = active ? subTitleActiveColor : subTitleDeactiveColor
    const SubtitleColorClass = hasSubTitleColor ? `text-${SubtitleColor}` : ``;
    const CompletionRewardImgSrc = imgSrc ? `${basePath + completionRewardImgSrc}` : `${basePath}/images/temporary-image.png`;
    const CompletionCurrentValue = completionCurrentValue ? completionCurrentValue : 0;
    const CompletionMaxValue = completionMaxValue ? completionMaxValue : 0;
  return (
    <div className='w-full h-12 bg-gray-600 rounded-lg flex items-center p-2 justify-between'>
        <div className='flex gap-3 w-full items-center'>
            <div className='shrink-0'>
                <Image src={QuickBonusImgSrc} alt='Quick Bonus Item Icon' width={35} height={35} />
            </div>
            <div className='text-xs font-semibold flex flex-col justify-center w-full'>
                <p>{title}</p>
                {bonusType != "CompletionType" && (
                    subTitle &&
                    <p className={SubtitleColorClass}>{subTitle}</p>
                )}

                {bonusType === "CompletionType" && (
                    <div className='flex flex-col'> 
                        <div className='flex justify-between items-center w-full mb-[2px]'> 
                            <p>{`$${CompletionCurrentValue} / $${CompletionMaxValue}`}</p>
                            <div className='flex items-center gap-1'>
                                {completionRewardText &&
                                    <p>{completionRewardText}</p>
                                } 
                                <div className='shrink-0'>
                                    <Image src={CompletionRewardImgSrc} alt='Completion Reward Icon' width={20} height={20} />
                                </div>
                            </div>
                        </div>

                        <div className='h-2 w-full bg-gray-800 rounded-full'>
                            <div className='h-full bg-green-500 rounded-full' 
                            style={{ width: `${Math.max((CompletionCurrentValue / CompletionMaxValue) * 100, 1)}%` }}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
       
        {bonusType === "ButtonType" && (
            <button className={`${active ? `bg-gray-900` : `bg-gray-500 border border-gray-300 text-gray-300`} shrink-0 h-10 w-28 flex items-center justify-center rounded-lg text-xs font-semibold`}>
                {active ? buttonActiveText || "Active" : buttonDeactiveText || "Inactive"}
            </button>
        )}
    </div>
  )
}

export default QuickBonusItem