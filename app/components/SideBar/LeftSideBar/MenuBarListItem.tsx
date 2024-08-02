import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

interface MenuBarListItemProps {
    isSideBarOpen: boolean,
    notSelectedImgSrc: string,
    SelectedImgSrc: string,
    itemName: string,
    pageHref: string,
    isSelected: boolean,
}

const MenuBarListItem = ({ isSideBarOpen, notSelectedImgSrc, SelectedImgSrc, itemName, pageHref, isSelected }: MenuBarListItemProps) => {
    const [showItemName, setShowItemName] = useState(isSideBarOpen);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!isSideBarOpen) {
            timer = setTimeout(() => setShowItemName(true), 200);
        } else {
            setShowItemName(false);
        }

        return () => clearTimeout(timer);
    }, [isSideBarOpen]);

    return (
        <li className='w-full flex items-start justify-start'>
            {!isSideBarOpen ? (
                <a href={pageHref} className='relative flex items-center justify-center group'>
                    <div className={`w-[2.77vw] aspect-square shrink-0 flex items-center justify-center rounded-lg ${isSelected ? 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]' : 'bg-[#241A46]'}`}>
                        <div className='w-[37.5%] aspect-square'>
                            <Image src={`${!isSelected ? notSelectedImgSrc : SelectedImgSrc}`} alt='Language icon' layout='responsive' width={100} height={100} />
                        </div>
                    </div>
                    {showItemName && (
                        <p className='fixed z-10 p-2 h-8 left-[4vw] bg-gradient-to-b from-[#BD73F9] shadow-glow shadow-[#BB6FFA] to-[#9B34FD] text-sm text-nowrap rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 text-white font-bold'>
                            {itemName}
                        </p>
                    )}
                </a>
            ) : (
                <a href={pageHref} className={`pl-[7.05%] w-[11.80vw] h-[2.77vw] flex items-center gap-2 rounded-lg ${isSelected ? 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]' : 'bg-[#241A46]'}`}>
                    <div className='w-[8.82%] aspect-square'>
                        <Image src={`${!isSelected ? notSelectedImgSrc : SelectedImgSrc}`} alt='Language icon' layout='responsive' width={100} height={100} />
                    </div>
                    <p className='text-gray-300 text-nowrap'>{itemName}</p>
                </a>
            )}
        </li>
    )
}

export default MenuBarListItem