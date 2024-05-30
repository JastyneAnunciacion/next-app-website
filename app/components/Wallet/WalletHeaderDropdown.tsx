'use client';

import React, { useState } from 'react'
import list from '../wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';
import WalletPopup from './WalletPopup';
import Toggle from '../Toggle';
import Searchbar from '../Searchbar';

interface WalletHeaderDropdownProps {
  walletButtonOnClick: () => void,
}

const WalletHeaderDropdown = ({ walletButtonOnClick }: WalletHeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false);
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative h-11'>
      <div className='flex items-center'>
        <button onClick={() => setIsOpen((prev) => !prev)} className="text-orange-400 border border-orange-400 text-glow p-2 w-44 h-9 flex items-center justify-between font-bold text-xs rounded-md">
          {selectedWallet && (
            <div className='flex w-full items-center justify-between gap-1'>
              <h3>{selectedWallet.Amount}</h3>
              <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={20} height={20}></Image>
            </div>
          )}
          {!isOpen ?
            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={20} height={20} />
            :
            <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={20} height={20} />
          }
        </button>

        <button onClick={walletButtonOnClick} className='bg-orange-500 text-black w-20 h-9 rounded-lg text-lg font-bold flex items-center justify-center gap-2 shrink-0'>
          <p>Wallet</p>
        </button>


        {isOpen && (
          <div className='absolute bg-black border border-orange-500 w-72 left-0 top-11 flex flex-col overflow-hidden z-20'>
            <div className='p-3'>
              <div className='border text-white'>
                <Searchbar />
              </div>
            </div>

            <div className="h-[260px] overflow-y-auto z-10 text-white font-semibold px-3" style={{ scrollbarWidth: "thin", scrollbarColor: "orange transparent" }}>
              {list.map((item, i) => (
                <button onClick={(() => handleItemClick(i))} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center justify-between' key={i}>
                  <div className='flex items-center gap-2'>
                    <div className='shrink-0'>
                      <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={20} height={20} />
                    </div>
                    <h3 className='text-gray-300'>{item.Token}</h3>
                  </div>
                  <h3>{item.Amount}</h3>
                </button>
              ))}
            </div>

            <div className='text-white text-sm px-3 pt-4 pb-3 flex justify-between bg-orange-600'>
              <p>Display in fiat</p>
              <Toggle bgIsDark={true} />
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default WalletHeaderDropdown