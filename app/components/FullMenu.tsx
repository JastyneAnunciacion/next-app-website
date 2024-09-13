'use client'

// import Serachbar from './Serachbar';
// import ListContainterWithTitleHeader from './lists/ListContainterWithTitleHeader';
// import ListItem from './lists/ListItem';
import basePath from '../utilities/basepath';
import Header from './Header';
import ListContainterWithTitleHeader from './List/ListContainterWithTitleHeader';
import ListItem from './List/ListItem';
import Searchbar from './Searchbar';

interface FullMenuProps {
    isExpanded: boolean;
}

const FullMenu = ({ isExpanded }: FullMenuProps) => {
    return (
        <div className={`fixed z-40 overflow-y-auto top-0 w-full h-full bg-[#201434] font-normal transition-all duration-700 transform ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='w-full flex justify-center self-center mb-[3.75vw]'>
                <Header isMenuOpen={isExpanded} />
            </div>
            <div className='flex justify-center px-[4.16vw] flex-col gap-[3.75vw] mb-[42.29vw]'>
                <div className='w-full aspect-[441/50] text-[4.16vw] text-manrope'>
                    <Searchbar
                        placeholderText='Find a Game'
                        gap='2.70vw'
                        paddingX='4.17vw'
                        searchIconWidth='5.20vw'
                    />
                </div>
                <div className='flex flex-col gap-[2.5vw]'>
                    <ListContainterWithTitleHeader title='Games' gap='6.25vw'>
                        <ListItem imgSrc={`${basePath}/images/mobile-pink-games-image.png`} linkHref='/' itemName='Casino' textHexColor='#D187FF' />
                        <ListItem imgSrc={`${basePath}/images/mobile-yellow-sports-image.png`} linkHref='/pages/sports' itemName='Sports' textHexColor='#FFF387' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='More' gap='6.25vw'>
                        <ListItem imgSrc={`${basePath}/images/mobile-light-green-rewards-image.png`} linkHref='/pages/affiliate' itemName='Rewards' textHexColor='#87FFD4' />
                        <ListItem imgSrc={`${basePath}/images/promotion-selected-image.png`} linkHref='' itemName='Promotions' textHexColor='#878CFF' />
                    </ListContainterWithTitleHeader>
                    <ListContainterWithTitleHeader title='User' hasBorderBottom={false} gap='6.25vw'>
                        <ListItem imgSrc={`${basePath}/images/mobile-blue-profile-image.png`} linkHref='/pages/profile' itemName='Profile' textHexColor='#87C5FF' />
                        <ListItem imgSrc={`${basePath}/images/mobile-green-wallet-image.png`} linkHref='/pages/wallet' itemName='Wallet' textHexColor='#9FFF87' />
                        <ListItem imgSrc={`${basePath}/images/orange-cog-image.png`} linkHref='/pages/settings' itemName='Settings' textHexColor='#FFA487' />
                    </ListContainterWithTitleHeader>
                </div>
            </div>
        </div>
    );
};

export default FullMenu;
