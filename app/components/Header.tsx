import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './WalletDropdown';
import basePath from '../utilities/basepath';
import QuickBonusButton from './QuickBonus/QuickBonusButton';
import SideBar from './SideBar';
import ProfileDropdown from './ProfileDropdown';
import Settings from './Settings';
import NotificationButton from './NotificationButton';
import ChatButton from './ChatButton';
// import ProfileButton from './ProfileButton';

const Header = () => {
  return (
    <header>
        <div className='p-2 flex justify-between h-[66px] bg-gray-700'>
          <div className='flex items-center gap-2'>
            <button className='w-10 h-10 flex items-center justify-center rounded-xl'>
              <Image className='rounded-full' src={`${basePath}/images/right-arrow-image.png`} alt="Header Main Logo" width={25} height={25} />
            </button>

            <Link href="/">
                <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.jpeg`} alt="Header Main Logo" width={50} height={50} />
            </Link>
            <QuickBonusButton />

            <button className='bg-gray-800 w-10 h-10 flex items-center justify-center rounded-xl'>
              <Image className='rounded-full' src={`${basePath}/images/search-image.png`} alt="Header Main Logo" width={25} height={25} />
            </button>
          </div>
          
          <SideBar />
            
          <div className='flex items-center gap-3'>
            <WalletDropdown />
            <ProfileDropdown />
            <Settings />
            <NotificationButton />
            <ChatButton />
          </div>
        </div>
    </header>
  )
}

export default Header