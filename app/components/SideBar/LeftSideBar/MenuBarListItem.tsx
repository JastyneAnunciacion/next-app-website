import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath';

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
            <a href={pageHref}
                className={`${isSelected && 'pointer-events-none'} transition-all duration-300 flex items-center pl-[0.83vw] h-[2.77vw] overflow-hidden gap-[0.69vw] rounded-lg
                    ${!isSideBarOpen ?
                        'w-[2.77vw] relative group shrink-0'
                        :
                        'w-[11.80vw]'
                    }  
                    ${isSelected ?
                        'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]'
                        :
                        'bg-[#241A46]'
                    }
                    `}>
                <div className={`h-[1.84vh] aspect-square`}>
                    <Image src={`${!isSelected ? basePath + notSelectedImgSrc : basePath + SelectedImgSrc}`} alt='Menu icon' layout='responsive' width={100} height={100} />
                </div>
                <p className={`${isSideBarOpen ? 'text-white' : 'text-white/0'} text-[0.83vw] transition-colors duration-100`}>{itemName}</p>

                {showItemName && (
                    <p className='fixed z-[1000] p-2 h-8 left-[4vw] bg-gradient-to-b from-[#BD73F9] shadow-glow shadow-[#bb6ffa86] to-[#9B34FD] text-sm text-nowrap rounded-lg opacity-0 transition-opacity duration-200 pointer-events-none group-hover:opacity-100 text-white font-bold'>
                        {itemName}
                    </p>
                )}
            </a>
        </li>
    )
}

export default MenuBarListItem