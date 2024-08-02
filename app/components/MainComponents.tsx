'use client'

import React, { ReactNode, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBar from './SideBar/LeftSideBar/MenuBar'

interface MainComponentsProps {
    children: ReactNode,
    currentPage?: string
}

const MainComponents = ({ children, currentPage = '' }: MainComponentsProps) => {
    const [isMenuBarOpen, setMenuBarOpen] = useState(false);

    const toggleMenuBar = () => {
        setMenuBarOpen(prev => !prev)
    };
    return (
        <main className='h-full w-full overflow-x-hidden'>
            <div className="flex w-full h-full flex-col">
                <Header onMenuButtonClick={toggleMenuBar} isMenuOpen={isMenuBarOpen} />
                <MenuBar isMenuOpen={isMenuBarOpen} currentPage={currentPage} />
                <div className='flex-1 overflow-auto flex flex-col items-center min-h-screen'>
                    <div className='flex flex-col mt-[66px] w-[min(1200px,90%)] flex-grow items-center gap-5'>
                        {children}
                    </div>
                    <div className='self-start w-full'>
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainComponents