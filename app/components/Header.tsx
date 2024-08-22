'use client'

import React, { useState } from 'react';
import WalletHeaderDropdown from './Wallet/WalletHeaderDropdown';
import Profile from './Profile';
import Searchbar from './Searchbar';
import WalletPopup from './Wallet/WalletPopup';
import Image from 'next/image';
import basePath from '../utilities/basepath';

interface HeaderProps {
  onMenuButtonClick: () => void;
  isMenuOpen: boolean;
  onClickChatButton: () => void;
  onClickNotificationButton: () => void;
  onClickProfileButton: () => void;
}

const Header = ({ onMenuButtonClick, isMenuOpen, onClickChatButton, onClickNotificationButton, onClickProfileButton }: HeaderProps) => {
  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [showChat, setShowChat] = useState(true);

  return (
    <header className='w-full fixed z-50'>
      <div className='bg-gradient-to-r from-[#070123] via-[#573A93] to-[#070123] w-full h-full pb-[1px] flex items-center justify-center rounded-lg text-white'>

        <div className='pb-[10px] px-[1.18%] w-full flex h-[5.63vw] items-end bg-[#070123] justify-between'>
          <div className='flex w-full items-center'>
            <button
              onClick={onMenuButtonClick}
              className={`w-[1.74vw] aspect-square bg-[#150934] shrink-0 mr-[1.6%] flex items-center justify-center rounded-md`}
            >
              <div className={`${isMenuOpen ? 'w-[0.69vw] aspect-square' : 'w-[0.82vw] aspect-[11.82/10]'}`}>
                <Image src={`${basePath}/images/thin-purple-${isMenuOpen ? 'back' : 'right'}-arrow-image.png`} alt='Expand icon' layout='responsive' width={100} height={100} />
              </div>
            </button>
            <div className='flex text-white text-[1.66vw] items-center gap-[0.69vw]'>
              <div className='w-[2.43vw] aspect-[35/34]'>
                <Image src={`${basePath}/images/phx-gamble-logo.png`} alt='Language icon' layout='responsive' width={100} height={100} />
              </div>
              <div className='flex gap-[0.55vw] font-offside text-nowrap'>
                <p className='text-[#B767FA]'>Phoenix</p>
                <p>Game</p>
              </div>
            </div>
          </div>

          <div className='flex w-full items-center justify-center gap-[0.69vw]'>
            <div className='w-[21.39vw] shrink-0 aspect-[77/10]'>
              <Searchbar />
            </div>
            <button
              onClick={() => { setShowChat(false); onClickNotificationButton(); }}
              className={`${!showChat && 'pointer-events-none'} w-[2.77vw] aspect-square shrink-0 flex items-center justify-center rounded-2xl ${showChat ? 'bg-[#241A46] ' : 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]'} `}
            >
              <div className='w-[35%] h-[37.5%]'>
                <Image src={`${basePath}/images/${!showChat ? 'gradient-white-to-purple' : 'purple'}-notification-bell-image.png`} alt='Notification icon' layout='responsive' width={100} height={100} />
              </div>
            </button>
            <button
              onClick={() => { setShowChat(true); onClickChatButton(); }}
              className={`${showChat && 'pointer-events-none'} w-[2.77vw] aspect-square shrink-0 flex items-center justify-center rounded-2xl ${showChat ? 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]' : 'bg-[#241A46]'} `}
            >
              <div className='w-[40%] h-[37.5%]'>
                <Image src={`${basePath}/images/${showChat ? 'gradient-white-to-purple' : 'purple'}-chat-image.png`} alt='Chat icon' layout='responsive' width={100} height={100} />
              </div>
            </button>
            <div className='w-[12.15vw] aspect-[35/8]'>
              <WalletHeaderDropdown walletButtonOnClick={() => setShowWalletPopup(true)} />
            </div>
            <Profile profileOnClick={onClickProfileButton} />
            <div className='w-[2.77vw] aspect-square shrink-0 flex items-center justify-center bg-[#241A46] rounded-xl border border-[#231744]'>
              <div className='w-[40%] aspect-square'>
                <Image src={`${basePath}/images/globe-image.png`} alt='Language icon' layout='responsive' width={100} height={100} />
              </div>
            </div>
          </div>
        </div>
        <WalletPopup show={showWalletPopup} onClose={() => setShowWalletPopup(false)} />
      </div>
    </header >
  )
}

export default Header