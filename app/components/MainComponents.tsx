'use client'

import React, { ReactNode, useEffect, useRef, useState, useCallback } from 'react'
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

    const updateFixedElementStyle = useCallback(() => {
        if (childrenDivRef.current) {
            const { width, top, left } = childrenDivRef.current.getBoundingClientRect();
            setFixedElementStyle({
                width,
                left,
                position: 'fixed',
            });
        }
    }, []);

    const updateWhileTransforming = useCallback(() => {
        updateFixedElementStyle();
        animationFrameId.current = requestAnimationFrame(updateWhileTransforming);
    }, [updateFixedElementStyle]);

    useEffect(() => {
        updateFixedElementStyle();

        const resizeObserver = new ResizeObserver(updateFixedElementStyle);

        const element = childrenDivRef.current;
        if (element) {
            resizeObserver.observe(element);
        }

        const mutationObserver = new MutationObserver(() => {
            updateFixedElementStyle();
        });

        if (element) {
            mutationObserver.observe(element, {
                attributes: true,
                attributeFilter: ['style', 'class'],
                subtree: true
            });
        }

        return () => {
            if (element) {
                resizeObserver.unobserve(element);
                mutationObserver.disconnect();
            }
        };
    }, [updateFixedElementStyle, isMenuBarOpen]);

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
    }, [updateFixedElementStyle, updateWhileTransforming, isMenuBarOpen]);

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
                    <div style={{ ...fixedElementStyle }} className='fixed rounded-xl h-full bg-gradient-to-b from-[#11062E] to-[#070123]' />
                    <div className={`shrink-0 h-full transition-width duration-300 pl-[0.69vw] pr-[0.35vw] mr-[0.35vw] ${!isMenuBarOpen ? 'w-[3.82vw] ' : 'w-[12.85vw]'}`} />
                    <div className='w-full flex justify-center items-center'>
                        <div ref={childrenDivRef} className={`w-full max-w-[1507px] transition-width duration-300 flex flex-col items-center z-10`}>
                            <div className='w-full px-[2.08vw] pt-[2.08vw] pb-[4.86vw]'>
                                {children}
                                <Footer />
                            </div>
                        </div>
                    </div>
                    <div className='shrink-0 w-[17.71vw] max-w-[340px]'>
                        <ChatBar show={rightSideOption === 0} />
                        <NotificationBar show={rightSideOption === 1} />
                    </div>
                </div>

                {/* Mobile Version */}
                <div className={`lg:hidden flex flex-col max-w-full ${isMenuBarOpen && 'overflow-hidden'}`}>
                    <div className='w-full flex flex-col items-center self-center'>
                        {children}
                    </div>
                    <div className='h-[42.29vw] bottom-0 z-0 pointer-events-none' />
                </div>
            </div>
            <ProfilePopup show={isProfilePopUpOpen} onClose={() => setProfilePopUpOpen(false)} />
        </main>
    )
}

export default MainComponents;
