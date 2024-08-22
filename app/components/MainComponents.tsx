'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuBar from './SideBar/LeftSideBar/MenuBar'
import ChatBar from './SideBar/RightSideBar/ChatBar/ChatBar'
import NotificationBar from './SideBar/RightSideBar/NotificationBar/NotificationBar'
import ProfilePopup from './ProfilePopup'

interface MainComponentsProps {
    children: ReactNode,
    currentPage?: string
}

const MainComponents = ({ children, currentPage = '' }: MainComponentsProps) => {
    const [isMenuBarOpen, setMenuBarOpen] = useState(false);
    const [isProfilePopUpOpen, setProfilePopUpOpen] = useState(false);
    const [rightSideOption, setRightSideOption] = useState(0);
    const childrenDivRef = useRef<HTMLDivElement>(null);
    const [fixedElementStyle, setFixedElementStyle] = useState<React.CSSProperties>({});
    const isTransforming = useRef(false);
    const animationFrameId = useRef<number | null>(null);

    const toggleMenuBar = () => {
        setMenuBarOpen(prev => !prev);
    };

    const updateFixedElementStyle = () => {
        if (childrenDivRef.current) {
            const { width, top, left } = childrenDivRef.current.getBoundingClientRect();
            setFixedElementStyle({
                width,
                top,
                left,
                position: 'fixed',
            });
        }
    };

    const updateWhileTransforming = () => {
        updateFixedElementStyle();
        animationFrameId.current = requestAnimationFrame(updateWhileTransforming);
    };

    useEffect(() => {
        updateFixedElementStyle();

        const handleResize = () => updateFixedElementStyle();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuBarOpen]);

    useEffect(() => {
        const element = childrenDivRef.current;

        if (element) {
            const handleTransitionStart = () => {
                isTransforming.current = true;
                updateWhileTransforming();
            };

            const handleTransitionEnd = () => {
                isTransforming.current = false;
                if (animationFrameId.current !== null) {
                    cancelAnimationFrame(animationFrameId.current);
                    animationFrameId.current = null;
                }
                updateFixedElementStyle();
            };

            element.addEventListener('transitionstart', handleTransitionStart);
            element.addEventListener('transitionend', handleTransitionEnd);

            updateFixedElementStyle();

            return () => {
                element.removeEventListener('transitionstart', handleTransitionStart);
                element.removeEventListener('transitionend', handleTransitionEnd);
                if (animationFrameId.current !== null) {
                    cancelAnimationFrame(animationFrameId.current);
                }
            };
        }
    }, [isMenuBarOpen]);

    return (
        <main className='h-full w-full overflow-x-hidden'>
            <div className="flex w-full h-full flex-col">
                <Header
                    onMenuButtonClick={toggleMenuBar}
                    isMenuOpen={isMenuBarOpen}
                    onClickChatButton={() => setRightSideOption(0)}
                    onClickNotificationButton={() => setRightSideOption(1)}
                    onClickProfileButton={() => setProfilePopUpOpen(true)}
                />
                <div className='flex w-full h-full pt-[5.62vw]'>
                    <div style={{ ...fixedElementStyle }} className='fixed rounded-xl h-full bg-gradient-to-b from-[#11062E] to-[#070123]' />
                    <MenuBar isMenuOpen={isMenuBarOpen} currentPage={currentPage} onProfileClick={() => setProfilePopUpOpen(true)} />
                    <div className='w-full flex justify-center items-center'>
                        <div ref={childrenDivRef} className={`${isMenuBarOpen ? 'w-[69.44vw] max-w-[1000px]' : 'w-[78.47vw] max-w-[1130px]'} transition-width duration-300 flex flex-col gap-[3.47vw] w-[78.47vw] max-w-[1507px] items-center z-10`}>
                            <div className='w-full px-[2.08vw] pt-[2.08vw] pb-[4.86vw]'>
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </div>
                    <div className='shrink-0 w-[17.71vw]'>
                        <ChatBar show={rightSideOption === 0} />
                        <NotificationBar show={rightSideOption === 1} />
                    </div>
                </div>
            </div>
            <ProfilePopup show={isProfilePopUpOpen} onClose={() => setProfilePopUpOpen(false)} />
        </main>
    )
}

export default MainComponents
