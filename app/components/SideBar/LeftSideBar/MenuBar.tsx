'use client'

import MenuBarListItem from './MenuBarListItem'

interface MenuBarProps {
    isMenuOpen: boolean,
    currentPage: string,
}

const MenuBar = ({ isMenuOpen, currentPage }: MenuBarProps) => {
    return (
        <div>
            <div className={`fixed mt-[81px] transition-width duration-300 ${!isMenuOpen ? 'w-[3.82vw] items-center' : 'w-[12.85vw]'} bg-[#070123] pl-[0.69vw] pr-[0.35vw] h-full flex flex-col`}>
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
                        pageHref='/casino'
                        isSelected={currentPage === 'Casino'}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-sports-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-sports-image.png'
                        itemName='Sports'
                        pageHref='/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-medal-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-medal-image.png'
                        itemName='Affiliate'
                        pageHref='/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-trophy-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-trophy-image.png'
                        itemName='Leaderboard'
                        pageHref='/games'
                        isSelected={false}
                    />
                    <MenuBarListItem
                        isSideBarOpen={isMenuOpen}
                        notSelectedImgSrc='/images/gradient-purple-stacked-image.png'
                        SelectedImgSrc='/images/gradient-white-to-purple-stacked-image.png'
                        itemName='Staking'
                        pageHref='/games'
                        isSelected={false}
                    />
                </ul>
            </div >
            <div className={`h-full border transition-width duration-300 pl-[0.69vw] mr-[0.35vw] ${!isMenuOpen ? 'w-[3.82vw] ' : 'w-[12.85vw]'}`} />
        </div >

    );
}

export default MenuBar