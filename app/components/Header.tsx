import React from 'react';
import WalletHeaderDropdown from './Wallet/WalletHeaderDropdown';
import Profile from './Profile';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <header className='w-full'>
      <div className='py-2 px-72 w-full flex justify-between h-[66px] bg-gray-700'>
        <div className='flex w-full items-center justify-center gap-2'>
          <WalletHeaderDropdown />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='w-40 h-10'>
            <Searchbar />
          </div>
          <Profile />
        </div>
      </div>
    </header>
  )
}

export default Header