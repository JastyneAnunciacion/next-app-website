'use client'

import MenuBarListItem from './MenuBarListItem'

interface MenuBarProps {
    isMenuOpen: boolean,
    currentPage: string,
}

const MenuBar = ({ isMenuOpen, currentPage }: MenuBarProps) => {
    return (
        <div>
            <div className={`fixed justify-between transition-width duration-300 ${!isMenuOpen ? 'w-[3.82vw]' : 'w-[12.85vw]'} bg-[#070123] pl-[0.69vw] pr-[0.35vw] h-[90vh] flex flex-col justify-between pb-[1.35vh]`}>
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
                        pageHref='/pages/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-medal-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-medal-image.png'
                        itemName='Affiliate'
                        pageHref='/pages/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-trophy-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-trophy-image.png'
                        itemName='Leaderboard'
                        pageHref='/pages/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-stacked-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-stacked-image.png'
                        itemName='Staking'
                        pageHref='/pages/games'
                        isSelected={false}
                    />
                </ul>
                <ul className='flex flex-col gap-[1.25vh] text-white w-full'>
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-profile-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-profile-image.png'
                        itemName='Profile'
                        pageHref='/pages/games'
                        isSelected={false}
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
            <div className={`h-full transition-width duration-300 pl-[0.69vw] mr-[0.35vw] ${!isMenuOpen ? 'w-[3.82vw] ' : 'w-[12.85vw]'}`} />
        </div >

    );
}

export default MenuBar