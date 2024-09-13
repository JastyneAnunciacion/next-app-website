'use client'

import FullMenu from '../../FullMenu'
import ImageResponsive from '../../ImageResponsive'
import QuickMenuButton from './QuickMenuButton'
import MenuBarListItem from './MenuBarListItem'

interface MenuBarProps {
    isMenuOpen: boolean,
    currentPage: string,
    onProfileClick: () => void
    onMobileMenuClick: () => void
}

const MenuBar = ({ isMenuOpen, currentPage, onProfileClick, onMobileMenuClick }: MenuBarProps) => {
    return (
        <div>
            {/* Web Version */}
            <div className={`fixed justify-between transition-width duration-300 ${!isMenuOpen ? 'w-[3.82vw]' : 'w-[12.85vw]'} bg-[#070123] pl-[0.69vw] pr-[0.35vw] mr-[0.35vw] h-[90vh] hidden lg:flex flex-col justify-between pb-[1.35vh] left-0 top-[5.63vw]`}>
                <ul className={`flex flex-col gap-[1.25vh] text-white w-full`}>
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-home-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-home-image.png'
                        itemName='Home'
                        pageHref='/'
                        isSelected={currentPage === 'Home'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-cards-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-cards-image.png'
                        itemName='Casino'
                        pageHref='/pages/casino'
                        isSelected={currentPage === 'Casino'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-sports-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-sports-image.png'
                        itemName='Sports'
                        pageHref=''
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-medal-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-medal-image.png'
                        itemName='Affiliate'
                        pageHref='/pages/affiliate'
                        isSelected={currentPage == 'Affiliate'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-trophy-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-trophy-image.png'
                        itemName='Leaderboard'
                        pageHref='/pages/leaderboard'
                        isSelected={currentPage == 'Leaderboard'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-stacked-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-stacked-image.png'
                        itemName='Staking'
                        pageHref='/pages/staking'
                        isSelected={currentPage == 'Staking'}
                    />
                </ul>
                <ul className='flex flex-col gap-[1.25vh] text-white w-full'>
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-profile-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-profile-image.png'
                        itemName='Profile'
                        isSelected={false}
                        onClick={onProfileClick}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-wallet-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-wallet-image.png'
                        itemName='Wallet'
                        pageHref='/pages/wallet'
                        isSelected={currentPage === 'Wallet'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-cog-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-cog-image.png'
                        itemName='Settings'
                        pageHref='/pages/settings'
                        isSelected={currentPage === 'Settings'}
                    />
                </ul>
            </div >

            {/* Mobile Version */}
            <div className='lg:hidden'>
                <div className='flex items-center justify-center font-manrope font-bold text-[2.08vw]'>
                    <div className={`${isMenuOpen ? 'w-[13%] aspect-square duration-500' : 'w-full aspect-[403/72] duration-700'} flex justify-center items-center max-w-[83.95%] bg-[#1F2937] fixed rounded-full bottom-[10.83vw] z-50 transition-all`}>
                        <div className={`${isMenuOpen ? 'justify-center' : 'justify-between'} flex items-center w-full px-[6.97vw]`}>
                            <button className={`${isMenuOpen && 'w-full'} flex flex-col items-center justify-center`} onClick={onMobileMenuClick}>
                                {isMenuOpen ?
                                    <div>
                                        <div>
                                            <p className='text-[4.16vw] text-[#FF8787]'>X</p>
                                        </div>
                                    </div>
                                    :
                                    <div className='flex flex-col gap-[0.83vw] items-center'>
                                        <div className='w-[4.58vw] aspect-square'>
                                            <ImageResponsive src='/images/mobile-menu-image.png' alt='Footer Button Image' width='100%' />
                                        </div>
                                        <p>Menu</p>
                                    </div>
                                }
                            </button>

                            {!isMenuOpen &&
                                <>
                                    <QuickMenuButton
                                        iconSrc='/images/mobile-games-image.png'
                                        iconActiveSrc='/images/mobile-pink-games-image.png'
                                        activeTextColor='#D187FF'
                                        pageHref='/'
                                        buttonName='Games'
                                        active={currentPage === 'Home'}
                                    />
                                    <QuickMenuButton
                                        iconSrc='/images/mobile-sports-image.png'
                                        iconActiveSrc='/images/mobile-yellow-sports-image.png'
                                        activeTextColor='#FFF387'
                                        pageHref='/pages/sports'
                                        buttonName='Sports'
                                        active={currentPage === 'Sports'}
                                    />
                                    <QuickMenuButton
                                        iconSrc='/images/mobile-rewards-image.png'
                                        iconActiveSrc='/images/mobile-light-green-rewards-image.png'
                                        activeTextColor='#87FFD4'
                                        pageHref='/pages/affiliate'
                                        buttonName='Rewards'
                                        active={currentPage === 'Affiliate'}
                                    />
                                    <QuickMenuButton
                                        iconSrc='/images/mobile-wallet-image.png'
                                        iconActiveSrc='/images/mobile-green-wallet-image.png'
                                        activeTextColor='#9FFF87'
                                        pageHref='/pages/wallet'
                                        buttonName='Wallet'
                                        active={currentPage === 'Wallet'}
                                    />
                                    <QuickMenuButton
                                        iconSrc='/images/mobile-profile-image.png'
                                        iconActiveSrc='/images/mobile-blue-profile-image.png'
                                        activeTextColor='#87C5FF'
                                        pageHref='/pages/profile'
                                        buttonName='Profile'
                                        active={currentPage === 'Profile'}
                                    />
                                </>
                            }
                        </div>
                    </div>
                    <FullMenu isExpanded={isMenuOpen} />
                </div>
                <div className='fixed bg-gradient-to-t from-[#242037] via-[#1F1648]/9 via-78% to-[#D9D9D9]/0 w-full h-[39.16vw] bottom-0 z-0 pointer-events-none' />
            </div>
        </div >
    );
}

export default MenuBar