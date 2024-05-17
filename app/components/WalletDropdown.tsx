'use client';

import React, { useState } from 'react'
import list from './wallet-list.json'
import Image from 'next/image';
import basePath from '../utilities/basepath';
import WalletPopup from './Wallet/WalletPopup';

const WalletDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative h-11'>
      <div className='flex items-center'>
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gray-800 text-white p-2 w-44 h-9 flex items-center justify-between font-bold text-xs rounded-md">
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

        <button onClick={() => setShowPopup(true)} className='bg-slate-200 w-20 h-9 rounded-lg text-lg font-bold flex items-center justify-center gap-2 shrink-0'>
          <p>Wallet</p>
        </button>

        <WalletPopup show={showPopup} onClose={() => setShowPopup(false)} />

        {isOpen && (
          <div className='absolute bg-gray-800 w-72 left-0 top-11 flex flex-col rounded-lg overflow-hidden z-20'>
            <div className='w-[95%] h-10 bg-gray-900 text-white flex border border-gray-600 rounded-md gap-2 items-center justify-center p-3 m-2'>
              <div className=''>
                <Image src={`${basePath}/images/search-image.png`} alt="Search Icon" width={15} height={15}></Image>
              </div>
              <input className='bg-gray-950 w-full' placeholder='Search' />
            </div>

            <div className="h-[260px] overflow-y-auto z-10 text-white font-semibold px-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 #031200" }}>
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

            <div className='text-white text-sm px-3 pt-4 pb-3 flex flex-col gap-2 bg-gray-700'>
              <p>Display in fiat</p>
            </div>
          </div>
        )}
      </div>
    </div>

  )
}

export default WalletDropdown