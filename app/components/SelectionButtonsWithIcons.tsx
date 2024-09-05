import React from 'react'
import ImageResponsive from './ImageResponsive'

interface SelectionButtonsWithIconsProps {
    defaultIconSrc: string
    selectedIconSrc: string
    buttonText: string
    isSelected: boolean
    isLast?: boolean
}

const SelectionButtonsWithIcons = ({
    defaultIconSrc,
    selectedIconSrc,
    buttonText,
    isSelected = false,
    isLast = false
}: SelectionButtonsWithIconsProps) => {
    const iconSrc = isSelected ? selectedIconSrc : defaultIconSrc
    return (
        <button className={`w-full aspect-[22/5] ${isSelected && 'bg-[#281D4D]'} px-[8.62%] flex items-center ${!isLast && 'mb-[8.62%]'}`}>
            <ImageResponsive src={iconSrc} alt='Selection Image' width='12.1%' aspectWidth={15} aspectHeight={13.85} />
            <p className={`ml-[8.06%] ${isSelected ? 'font-semibold text-white' : 'font-medium text-[#7E69C0]'} text-[0.69vw]`}>{buttonText}</p>
        </button>
    )
}

export default SelectionButtonsWithIcons