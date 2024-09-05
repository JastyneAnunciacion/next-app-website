import React from 'react'
import ImageResponsive from './ImageResponsive'

interface SelectionButtonsWithIconsProps {
    defaultIconSrc: string
    selectedIconSrc: string
    iconWidth: string
    iconAspectWidth?: number
    iconAspectHeight?: number
    buttonText: string
    isSelected: boolean
    hasAlert?: boolean
    isLast?: boolean
}

const SelectionButtonsWithIcons = ({
    defaultIconSrc,
    selectedIconSrc,
    buttonText,
    iconWidth,
    iconAspectWidth = 1,
    iconAspectHeight = 1,
    isSelected = false,
    hasAlert = false,
    isLast = false
}: SelectionButtonsWithIconsProps) => {
    const iconSrc = isSelected ? selectedIconSrc : defaultIconSrc
    return (
        <button className={`w-full aspect-[22/5] ${isSelected && 'bg-[#281D4D]'} px-[8.62%] flex items-center ${!isLast && 'mb-[8.62%]'}`}>
            <ImageResponsive src={iconSrc} alt='Selection Image' width={iconWidth} aspectWidth={iconAspectWidth} aspectHeight={iconAspectHeight} />
            <p className={`ml-[8.06%] ${isSelected ? 'font-semibold text-white' : 'font-medium text-[#7E69C0]'} text-[0.69vw]`}>{buttonText}</p>
            {hasAlert &&
                <>
                    <div className='ml-auto' />
                    <ImageResponsive src='/images/yellow-alert-image.png' alt='Alert Image' width='10.48%' />
                </>
            }
        </button>
    )
}

export default SelectionButtonsWithIcons