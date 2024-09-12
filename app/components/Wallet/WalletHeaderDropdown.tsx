'use client';

import React, { useState, useRef, useEffect } from 'react'
import list from '../wallet-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';
import Toggle from '../Toggle';
import ImageResponsive from '../ImageResponsive';

interface WalletHeaderDropdownProps {
  walletButtonOnClick: () => void,
  paddingMobileLeft?: string
  paddingMobileRight?: string
}

const WalletHeaderDropdown = ({ walletButtonOnClick, paddingMobileLeft = '2.92vw', paddingMobileRight = '7.77%' }: WalletHeaderDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);
  const mainButtonRef = useRef(null);

  // Mobile stuff
  const [dropdownTopMobile, setDropdownTopMobile] = useState<number | null>(null);

  const mainButtonMobileRef = useRef<HTMLDivElement>(null);
  const dropdownMobileRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (index: number) => {
    setCurrentlySelected(index);
    setIsOpen(false);
  };

  useEffect(() => {
    if (mainButtonMobileRef.current && isOpen) {
      const rect = mainButtonMobileRef.current.getBoundingClientRect();
      setDropdownTopMobile(rect.bottom + window.scrollY);
    }
  }, [isOpen]);

  const selectedWallet = list[currentlySelected];
  return (
    <>
      {/* Web Version */}
      <div className='relative w-full h-full hidden lg:block'>
        <div className='w-full h-full'>
          <div className='relative bg-gradient-to-r from-[#A379DF] to-[#221C42]/0 w-full h-full p-[1px] flex items-center justify-center rounded-lg text-white'>
            <div ref={mainButtonRef} onClick={() => setIsOpen((prev) => !prev)} className="bg-gradient-to-r from-[#412A78] to-[#221C42] pl-[5.71%] pb-[1px] pr-[2.29%] w-full h-full flex items-center cursor-pointer justify-between rounded-md">
              {selectedWallet && (
                <div className='flex w-full items-center h-full gap-[0.34vw]'>
                  <div className='flex items-center justify-center shrink-0 w-[1.04vw] aspect-square'>
                    <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
                  </div>
                  <p className='text-[0.83vw] font-medium'>{selectedWallet.Amount}</p>
                </div>
              )}
              <button onClick={(e) => {
                e.stopPropagation();
                // walletButtonOnClick(); 
              }}
                className='bg-[#02CC00] w-[4.72vw] aspect-[68/35] rounded-lg flex items-center justify-center shrink-0'>
                <p className='text-[0.83vw] font-medium'>Deposit</p>
              </button>
            </div>
          </div>

          {/* {isOpen && (
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
        )} */}
        </div>
      </div>

      {/* Mobile Version */}
      <div
        ref={mainButtonMobileRef}
        className='relative bg-gradient-to-r text-[4.17vw] font-manrope from-[#A379DF] to-[#221C42]/0 w-full h-full p-[0.21vw] lg:hidden flex items-center justify-center rounded-lg'
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ paddingLeft: paddingMobileLeft }}
          className={`relative bg-gradient-to-r from-[#412A78] to-[#221C42] w-full h-full text-white flex items-center justify-between rounded-lg`}
        >
          {selectedWallet && (
            <div className='absolute flex h-full w-full items-center gap-[2.29vw]'>
              <div className='w-[6.25vw] aspect-square'>
                <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
              </div>
              <p className='overflow-hidden text-ellipsis whitespace-nowrap w-full text-[4.16vw] font-manrope text-left'>
                {selectedWallet.Amount}
              </p>
            </div>
          )}

          <div
            style={{ right: paddingMobileRight }}
            className='absolute right-0 shrink-0 ml-auto w-[15.54%] bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] aspect-square rounded-lg items-center justify-center flex'>
            <ImageResponsive src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`} alt='Wallet Mobile Dropdown Arrow' width='33.33%' aspectWidth={10} aspectHeight={13} />
          </div>
        </button>
        {isOpen && dropdownTopMobile !== null && (
          <div
            ref={dropdownMobileRef}
            className='fixed left-1/2 transform -translate-x-1/2 w-[88.75vw] aspect-[142/143] bg-[#1A1E27] flex flex-col overflow-hidden z-20 rounded-2xl'
            style={{ top: `${dropdownTopMobile}px` }}
          >
            <div className="overflow-y-auto z-10 text-white border-b border-[#252A35] flex flex-col py-[3.75vw] px-[5.63vw] gap-[5.83vw]">
              {list.map((item, i) => (
                <button onClick={(() => handleItemClick(i))} className='flex hover:bg-[#272d3a] cursor-pointer items-center justify-between' key={i}>
                  <p>{item.Amount}</p>
                  <div className='flex justify-between  w-[20vw] items-center gap-[2.08vw]'>
                    <p className='text-left font-bold'>{item.Token}</p>
                    <ImageResponsive src={item.TokenIconSrc} alt="Token Icon" width='5.21vw' />
                  </div>
                </button>
              ))}
            </div>

            <div className='py-[6.67vw] px-[5.63vw] text-[3.33vw] h-[29.38vw] gap-[6.88vw] flex flex-col justify-center'>
              <div className='flex justify-between'>
                <Toggle toggleText='Hide 0 balances' toggleWidth='' />
              </div>
              <div className='flex justify-between'>
                <Toggle toggleText='Display in USD' toggleWidth='' />
              </div>
            </div>
          </div>
        )}
      </div>
    </>

  )
}

export default WalletHeaderDropdown