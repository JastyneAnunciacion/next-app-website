'use client'

import React, { useState } from 'react';
import WalletHeaderDropdown from './Wallet/WalletHeaderDropdown';
import Profile from './Profile';
import Searchbar from './Searchbar';
import WalletPopup from './Wallet/WalletPopup';

const Header = () => {
  const [showWalletPopup, setShowWalletPopup] = useState(false);

  return (
    <header className='w-full'>
      <div className='py-2 px-72 w-full flex justify-between h-[66px] bg-gray-700'>
        <div className='flex w-full items-center justify-center gap-2'>
          <WalletHeaderDropdown walletButtonOnClick={() => setShowWalletPopup(true)} />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='w-40 h-10'>
            <Searchbar />
          </div>
          <Profile walletOnClick={() => setShowWalletPopup(true)} />
        </div>
      </div>

      <WalletPopup show={showWalletPopup} onClose={() => setShowWalletPopup(false)} />

    </header>
  )
}

export default Header