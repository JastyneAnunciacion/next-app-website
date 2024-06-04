'use client'

import React, { useState } from 'react';
import WalletHeaderDropdown from './Wallet/WalletHeaderDropdown';
import Profile from './Profile';
import Searchbar from './Searchbar';
import WalletPopup from './Wallet/WalletPopup';
import Image from 'next/image';
import basePath from '../utilities/basepath';

const Header = () => {
  const [showWalletPopup, setShowWalletPopup] = useState(false);

  return (
    <header className='w-full fixed'>
      <div className='py-2 w-full flex items-center h-[66px] border-b bg-black'>
        <div className='flex text-white font-extrabold text-xl items-center gap-2'>
          <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Header Main Logo" width={50} height={50} />
          <p>PHX.GAMBLE</p>
        </div>

        <div className='flex w-full items-center justify-center gap-2 pl-72'>
          <WalletHeaderDropdown walletButtonOnClick={() => setShowWalletPopup(true)} />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='w-40 h-10 border rounded-lg'>
            <Searchbar />
          </div>
          <div className='pr-72'>
            <Profile walletOnClick={() => setShowWalletPopup(true)} />
          </div>
        </div>
      </div>

      <WalletPopup show={showWalletPopup} onClose={() => setShowWalletPopup(false)} />

    </header>
  )
}

export default Header