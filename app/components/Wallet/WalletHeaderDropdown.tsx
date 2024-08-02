'use client';

import React, { useState, useRef } from 'react'
import list from '../wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';
import Toggle from '../Toggle';
import Searchbar from '../Searchbar';

interface WalletHeaderDropdownProps {
  walletButtonOnClick: () => void,
}

const WalletHeaderDropdown = ({ walletButtonOnClick }: WalletHeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const mainButtonRef = useRef(null);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false);
  };

  const selectedWallet = list[currentlySelected];
  return (
    <div className='relative w-full h-full'>
      <div className='w-full h-full'>
        <div className='relative bg-gradient-to-r from-[#A379DF] to-[##221C42]/0 w-full h-full p-[1px] flex items-center justify-center rounded-lg text-white'>
          <button ref={mainButtonRef} onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412A78] to-[#221C42] pl-[5.71%] pb-[1px] pr-[2.29%] w-full h-full flex items-center justify-between rounded-md">
            {selectedWallet && (
              <div className='flex w-full items-center h-full gap-[0.34vw]'>
                <div className='flex items-center justify-center shrink-0 h-[37.5%] aspect-square'>
                  <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
                </div>
                <p className='text-[0.83vw] font-[500]'>{selectedWallet.Amount}</p>
              </div>
            )}
            <button onClick={walletButtonOnClick} className='bg-[#02CC00] w-[38.86%] aspect-[68/35] rounded-lg flex items-center justify-center shrink-0'>
              <p className='text-[0.83vw] font-[500]'>Deposit</p>
            </button>
          </button>
        </div>

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