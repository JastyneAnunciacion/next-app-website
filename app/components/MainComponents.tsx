'use client'

import React, { ReactNode, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBar from './SideBar/LeftSideBar/MenuBar'
import ChatBar from './SideBar/RightSideBar/ChatBar/ChatBar'
import NotificationBar from './SideBar/RightSideBar/NotificationBar/NotificationBar'

interface MainComponentsProps {
    children: ReactNode,
    currentPage?: string
}

const MainComponents = ({ children, currentPage = '' }: MainComponentsProps) => {
    const [isMenuBarOpen, setMenuBarOpen] = useState(false);
    const [rightSideOption, setRightSideOption] = useState(0);

    const toggleMenuBar = () => {
        setMenuBarOpen(prev => !prev)
    };

    return (
        <main className='h-full w-full overflow-x-hidden'>
            <div className="flex w-full h-full flex-col">
                <Header
                    onMenuButtonClick={toggleMenuBar}
                    isMenuOpen={isMenuBarOpen}
                    onClickChatButton={() => setRightSideOption(0)}
                    onClickNotificationButton={() => setRightSideOption(1)}
                />
                <div>
                    <div className='flex w-full h-full pt-[10vh]'>
                        <MenuBar isMenuOpen={isMenuBarOpen} currentPage={currentPage} />
                        <div className='w-full flex justify-center items-center'>
                            <div className={`transition-width duration-300 flex-col ${isMenuBarOpen ? ' w-[65.27vw]' : 'w-[74.30vw]'} items-center`}>
                                {children}
                            </div>
                        </div>
                        <div className='shrink-0 w-[17.71vw]'>
                            <ChatBar show={rightSideOption == 0} />
                            <NotificationBar show={rightSideOption == 1} />
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