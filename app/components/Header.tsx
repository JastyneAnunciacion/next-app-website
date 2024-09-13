'use client'

import React, { useState } from 'react';
import WalletHeaderDropdown from './Wallet/WalletHeaderDropdown';
import Profile from './Profile';
import Searchbar from './Searchbar';
import WalletPopup from './Wallet/WalletPopup';
import ImageResponsive from './ImageResponsive';
import Link from 'next/link';
import Image from 'next/image';
import basePath from '../utilities/basepath';

interface HeaderProps {
  onMenuButtonClick?: () => void;
  isMenuOpen: boolean;
  onClickChatButton?: () => void;
  onClickNotificationButton?: () => void;
  onClickProfileButton?: () => void;
}

const Header = ({ onMenuButtonClick, isMenuOpen, onClickChatButton, onClickNotificationButton, onClickProfileButton }: HeaderProps) => {
  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [showChat, setShowChat] = useState(true);

  return (
    <>
      {/* Web Version */}
      <header className='w-full fixed z-50 hidden lg:block'>
        <div className='bg-gradient-to-r from-[#070123] via-[#573A93] to-[#070123] w-full h-full pb-[1px] flex items-center justify-center rounded-lg text-white'>

          <div className='pb-[10px] px-[1.18%] w-full flex h-[5.63vw] items-end bg-[#070123] justify-between'>
            <div className='flex w-full items-center'>
              <button
                onClick={onMenuButtonClick}
                className={`w-[1.74vw] aspect-square bg-[#150934] shrink-0 mr-[1.6%] flex items-center justify-center rounded-md`}
              >
                <ImageResponsive src={`/images/thin-purple-${isMenuOpen ? 'back' : 'right'}-arrow-image.png`} alt='Expand Button icon' width={`${isMenuOpen ? 'w-[0.69vw]' : 'w-[0.82vw]'}`} aspectWidth={isMenuOpen ? 1 : 11.82} aspectHeight={isMenuOpen ? 1 : 10} />
              </button>
              <div className='flex text-white text-[1.66vw] items-center gap-[0.69vw]'>
                <ImageResponsive
                  src='/images/phx-gamble-logo.png'
                  alt='Language Icon'
                  width='2.43vw'
                  aspectWidth={35}
                  aspectHeight={34}
                />
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
                onClick={() => { setShowChat(false); onClickNotificationButton?.(); }}
                className={`${!showChat && 'pointer-events-none'} w-[2.77vw] aspect-square shrink-0 flex items-center justify-center rounded-2xl ${showChat ? 'bg-[#241A46] ' : 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]'} `}
              >
                <ImageResponsive src={`/images/${!showChat ? 'gradient-white-to-purple' : 'purple'}-notification-bell-image.png`} alt='Notification icon' width='35%' aspectWidth={13.85} aspectHeight={15} />
              </button>
              <button
                onClick={() => { setShowChat(true); onClickChatButton?.(); }}
                className={`${showChat && 'pointer-events-none'} w-[2.77vw] aspect-square shrink-0 flex items-center justify-center rounded-2xl ${showChat ? 'bg-gradient-to-b from-[#BD73F9] to-[#9B34FD] shadow-glow shadow-[#bb6ffa86]' : 'bg-[#241A46]'} `}
              >
                <ImageResponsive src={`/images/${showChat ? 'gradient-white-to-purple' : 'purple'}-chat-image.png`} alt='Chat icon' width='40%' aspectWidth={16} aspectHeight={14.86} />
              </button>
              <div className='w-[12.15vw] aspect-[35/8]'>
                <WalletHeaderDropdown walletButtonOnClick={() => setShowWalletPopup(true)} />
              </div>
              <Profile profileOnClick={() => { onClickProfileButton?.() }} />
              <div className='w-[2.77vw] aspect-square shrink-0 flex items-center justify-center bg-[#241A46] rounded-xl border border-[#231744]'>
                <ImageResponsive src='/images/globe-image.png' alt='Language icon' width='40%' />
              </div>
            </div>
          </div>
          <WalletPopup show={showWalletPopup} onClose={() => setShowWalletPopup(false)} />
        </div >
      </header >

      {/* Mobile Version */}
      <header className='w-full h-full flex items-center lg:hidden'>
        <div className='borders px-[6.04vw] flex items-center w-full aspect-[441/74] justify-center gap-[2.08vw]'>
          <Link href="/" className='w-[9.17vw] aspect-square shrink-0'>
            <ImageResponsive src='/images/phx-gamble-logo.png' alt="Header Main Logo" width='100%' />
          </Link>
          <div className='w-[40.21vw] aspect-[193/49] shrink-0'>
            <WalletHeaderDropdown walletButtonOnClick={() => setShowWalletPopup(true)} />
          </div>
          <Link href='/pages/wallet' className='w-[10.21vw] aspect-square shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
            <ImageResponsive src='/images/plus-purple-image.png' alt='Plus Icon' width='51.02%' />
          </Link>
          <div className='w-[10.21vw] aspect-square shrink-0 bg-[#241a46] rounded-xl flex items-center justify-center'>
            <ImageResponsive src='/images/purple-question-image.png' alt='Question Icon' width='51.02%' />
          </div>
          <Link href="/pages/profile" className='w-[10.21vw] aspect-square flex items-center shrink-0'>
            <ImageResponsive src='/images/temporary-profile-small-image.png' alt="Player" width='100%' />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header