'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import SideBarListItem from './SideBarListItem'
import SideBarSeperator from './SideBarSeperator'
import SideBarDropdownListItem from './SideBarDropdownListItem'

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowY: 'scroll',
                    overflowX: 'visible',
                }}
                className={`fixed mt-[66px] transition-width duration-300 ${isOpen ? 'w-60 px-6' : 'w-14'} bg-black h-full flex flex-col items-center py-3`}>

                <button className={`p-2 text-white ${isOpen && 'fixed ml-60 top-20'}`} onClick={toggleSidebar}>
                    <div className='h-9 w-9 bg-orange-500 rounded-full flex items-center justify-center' >
                        <Image src={`${basePath}/images/${isOpen ? 'left-arrow' : 'right-arrow'}-image.png`} alt='expand icon' width={30} height={30} />
                    </div>
                </button>

                <ul className={`${isOpen && 'self-start flex flex-col items-start'} text-white mt-2`}>
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Lobby' pageHref='/' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Games' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Slots' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='New Slots' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Bonus Buys' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Live Casino' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Game Shows' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Blackjack' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Baccarat' pageHref='/games' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Roulette' pageHref='/games' />
                    <SideBarSeperator isSideBarOpen={isOpen} />
                    <SideBarDropdownListItem isSideBarOpen={isOpen} itemName='Sports' />
                    <SideBarSeperator isSideBarOpen={isOpen} />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Promotions' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='AC Milan' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Telegram Casino' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Telegram Community' pageHref='/casino' />
                    <SideBarSeperator isSideBarOpen={isOpen} />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Token' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Staking' pageHref='/casino' />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Airdrop' pageHref='/casino' />
                    <SideBarSeperator isSideBarOpen={isOpen} />
                    <SideBarListItem isSideBarOpen={isOpen} itemName='Help' pageHref='/casino' />
                </ul>
            </div >
            <div className={`'transition-width duration-300 ${isOpen ? 'w-60 px-6' : 'w-14'}`} />
        </div>

    );
}

export default SideBar