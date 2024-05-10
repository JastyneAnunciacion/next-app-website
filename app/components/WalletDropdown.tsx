'use client';
import React, { useState } from 'react'
import list from './wallet-list.json'
import Image from 'next/image';
import basePath from '../utilities/basepath';

const WalletDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative h-11 w-52'>
      <div className='flex items-center'>
        <button onClick={() => setIsOpen((prev) => !prev)} className="bg-gray-800 text-white p-2 w-28 h-11 flex items-center justify-between font-bold text-xs rounded-l-lg shrink-0">
            {selectedWallet && (
              <div className='flex items-center gap-1'>
                <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" width={20} height={20}></Image>
                <h3>${selectedWallet.Amount}</h3>
              </div>
              )}
              {!isOpen ? 
              <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={20} height={20} />
              :
              <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={20} height={20} />
              }
        </button>

        <button className='absolute left-[105px] bg-slate-950 w-24 h-12 rounded-lg text-white text-sm flex items-center justify-center gap-2 shrink-0'>
            <div className='shrink-0'>
                <Image src={`${basePath}/images/wallet-image.png`} alt='Wallet Icon' width={20} height={20} />
            </div>
            <p>Wallet</p>
        </button>

        {isOpen && (
          <div className='absolute bg-gray-800 w-72 left-0 top-11 flex flex-col rounded-lg overflow-hidden z-20'>
            <div className='w-[95%] h-10 bg-gray-900 text-white flex border border-gray-600 rounded-md gap-2 items-center justify-center p-3 m-2'>
              <div className=''>
                <Image src={`${basePath}/images/search-image.png`} alt="Search Icon" width={15} height={15}></Image>
              </div>
              <input className='bg-gray-950 w-full' placeholder='Search'/>
            </div>

            <div className="h-[260px] overflow-y-auto z-10 text-white font-semibold px-3" style={{ scrollbarWidth: "thin", scrollbarColor: "#374151 #031200" }}>
              {list.map((item, i) => (
                <button onClick={(() => handleItemClick(i))} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center justify-between' key={i}>
                  <div className='flex items-center gap-2'>
                    <div className='shrink-0'>
                      <Image src={basePath + item.TokenIconSrc} alt="Token Icon" width={20} height={20}></Image>
                    </div>
                    <h3 className='text-gray-300'>{item.Token}</h3>
                  </div>
                  <h3>${item.Amount}</h3>
                </button>
                ))}
              </div>

              <div className='text-white text-sm px-3 pt-4 pb-3 flex flex-col gap-2 bg-gray-700'> 
                <p>Hide 0 Balance</p>
                <p>Show vault balance</p>
                <p>Display in flat</p>
              </div>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default WalletDropdown