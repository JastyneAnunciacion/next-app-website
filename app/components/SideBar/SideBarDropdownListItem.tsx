import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath';
import SideBarListItem from './SideBarListItem';

interface SideBarDropdownListItemProps {
    isSideBarOpen: boolean
    itemName: string,
}

const SideBarDropdownListItem = ({ isSideBarOpen, itemName }: SideBarDropdownListItemProps) => {
    const [showItemName, setShowItemName] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (!isSideBarOpen) {
            timer = setTimeout(() => setShowItemName(true), 200); // Adjust timeout as needed
        } else {
            setShowItemName(false);
        }

        return () => clearTimeout(timer);
    }, [isSideBarOpen]);

    return (
        <li className='w-full'>
            {isSideBarOpen ? (
                <div>
                    <button onClick={(() => setDropdownOpen((prev) => !prev))} className='h-11 w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-2'>
                            <div className='h-7 w-7 bg-gray-300 rounded-full' />
                            {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Side Bar Image" width={25} height={25} /> */}
                            <p className='text-gray-300 text-nowrap'>{itemName}</p>
                        </div>
                        {isDropdownOpen ?
                            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={30} height={30} />
                            :
                            <Image src={`${basePath}/images/left-arrow-image.png`} alt="Up Arrow" width={30} height={30} />
                        }
                    </button>

                    {isDropdownOpen && (
                        <ul className='flex flex-col items-start'>
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='All Sports' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='In Play' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='Football' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='Golf' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='Tennis' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='Basketball' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='Horse Racing' pageHref='/sports' />
                            <SideBarListItem isSideBarOpen={isSideBarOpen} itemName='American Football' pageHref='/sports' />
                        </ul>
                    )}
                </div>
            ) : (
                <button className='relative w-9 h-9 flex items-center justify-center hover:bg-blue-400 hover:rounded-full group'>
                    <div className='h-7 w-7 bg-gray-300 rounded-full' />
                    {showItemName && (
                        <p className='fixed p-2 h-8 left-14 z-10 bg-gray-400 text-sm text-nowrap rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none text-white font-bold'>
                            {itemName}
                        </p>
                    )}

                    {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Side Bar Image" width={25} height={25} /> */}
                </button>
            )}
        </li>
    )
}

export default SideBarDropdownListItem