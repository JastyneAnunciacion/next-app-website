'use client'

import React, { ReactNode, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBar from './SideBar/LeftSideBar/MenuBar'
import ChatBar from './SideBar/RightSideBar/ChatBar'

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
                <div>
                    <div className='flex w-full h-full mt-[10vh]'>
                        <MenuBar isMenuOpen={isMenuBarOpen} currentPage={currentPage} />
                        <div className='w-full flex justify-center items-center'>
                            <div className='flex-col w-[69.44vw] items-center'>
                                {children}
                            </div>
                        </div>
                        <div>
                            <ChatBar />
                        </div>
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