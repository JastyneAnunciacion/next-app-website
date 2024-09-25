'use client'

import React, { ReactNode, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBar from './SideBar/LeftSideBar/MenuBar'
import ChatBar from './SideBar/RightSideBar/ChatBar/ChatBar'
import NotificationBar from './SideBar/RightSideBar/NotificationBar/NotificationBar'
import ProfilePopup from './ProfilePopup'

interface MainComponentsProps {
    children: ReactNode,
    isMenuBarOpen: boolean,
    toggleMenuBar: () => void
}

const MainComponents = ({ children, isMenuBarOpen, toggleMenuBar }: MainComponentsProps) => {
    const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
    const [rightSideOption, setRightSideOption] = useState(0);

    return (
        <main className='h-full w-full overflow-x-hidden'>
            <MenuBar
                isMenuOpen={isMenuBarOpen}
                onProfileClick={() => setProfilePopUpOpen(true)}
                onMobileMenuClick={toggleMenuBar}
            />
            <div className="flex w-full h-full flex-col">
                <Header
                    onMenuButtonClick={toggleMenuBar}
                    isMenuOpen={isMenuBarOpen}
                    onClickChatButton={() => setRightSideOption(0)}
                    onClickNotificationButton={() => setRightSideOption(1)}
                    onClickProfileButton={() => setProfilePopUpOpen(true)}
                />
                {/* Web Version */}
                <div className='hidden lg:flex w-full h-full pt-[5.62vw]'>
                    <div className={`shrink-0 h-full transition-width duration-300 pl-[0.69vw] pr-[0.35vw] mr-[0.35vw] ${!isMenuBarOpen ? 'w-[3.82vw] ' : 'w-[12.85vw]'}`} />
                    <div className='w-full mx-auto flex justify-center items-center'>
                        {children}
                    </div>
                    <div className='shrink-0 w-[17.36vw] ml-[0.35vw] max-w-[380px]'>
                        <ChatBar show={rightSideOption === 0} />
                        <NotificationBar show={rightSideOption === 1} />
                    </div>
                </div>

                {/* Mobile Version */}
                <div className={`lg:hidden flex flex-col max-w-full ${isMenuBarOpen && 'overflow-hidden'}`}>
                    <div className='w-full flex flex-col items-center self-center'>
                        {children}
                        <Footer />
                    </div>
                    <div className='h-[42.29vw] bottom-0 z-0 pointer-events-none' />
                </div>
            </div>
            <ProfilePopup show={isProfilePopUpOpen} onClose={() => setProfilePopUpOpen(false)} />
        </main>
    )
}

export default MainComponents;
