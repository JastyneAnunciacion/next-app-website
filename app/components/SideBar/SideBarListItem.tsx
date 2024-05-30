import React, { useEffect, useState } from 'react'
import Link from 'next/link'

interface SideBarListItemProps {
    isSideBarOpen: boolean
    itemName: string,
    pageHref: string
}

const SideBarListItem = ({ isSideBarOpen, itemName, pageHref }: SideBarListItemProps) => {
    const [showItemName, setShowItemName] = useState(isSideBarOpen);

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
        <li>
            {isSideBarOpen ? (
                <a href={pageHref} className='w-full h-11 flex items-center justify-center gap-2'>
                    <div className='h-7 w-7 bg-gray-300/20 rounded-full' />
                    {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Side Bar Image" width={25} height={25} /> */}
                    <p className='text-gray-300 text-nowrap'>{itemName}</p>
                </a>
            ) : (
                <a href={pageHref} className='relative w-9 h-9 flex items-center justify-center hover:bg-blue-400 hover:rounded-full group'>
                    <div className='h-7 w-7 bg-gray-300/20 rounded-full' />
                    {showItemName && (
                        <p className='fixed z-10 p-2 h-8 left-14 bg-gray-400 text-sm text-nowrap rounded-lg opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none text-white font-bold'>
                            {itemName}
                        </p>
                    )}
                    {/* <Image className='rounded-full' src={`${basePath}/images/temporary-image.png`} alt="Side Bar Image" width={25} height={25} /> */}
                </a>
            )}
        </li>
    )
}

export default SideBarListItem