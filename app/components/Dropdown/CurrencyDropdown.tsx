'use client';
import React, { useState } from 'react'
import list from '@/app/components/currencies-list.json'
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface CurrencyDropdownProps {
  currencyIconSize?: string,
  dropDownButtonSize?: string,
  dropDownArrowWidth?: string,
  dropDownArrowSize?: string,
  dropDownArrowAspectWidth?: number,
  dropDownArrowAspectHeight?: number,
  paddingLeft?: string,
  paddingRight?: string,
  dropDownOffset?: number,
}

const CurrencyDropdown = ({
  currencyIconSize = '6.25vw',
  dropDownButtonSize = '7.5vw',
  dropDownArrowSize = '2.08vw',
  dropDownArrowAspectWidth = 12,
  dropDownArrowAspectHeight = 15,
  paddingLeft = '3.96vw',
  paddingRight = '4.58vw',
  dropDownOffset = 0
}: CurrencyDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentlySelected, setCurrentlySelected] = useState(0);


  const selectedCurrency = list[currentlySelected];
  return (
    <div className='relative bg-gradient-to-r from-[#926dca] to-[#926dca]/0 w-full h-full p-[0.21vw] rounded-lg'>
      <button
        style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-gradient-to-r from-[#412974] to-[#231d42] w-full h-full flex items-center justify-between rounded-lg"
      >
        {selectedCurrency && (
          <div className='flex items-center gap-[2.29vw]'>
            <div
              style={{ width: currencyIconSize }}
              className='shrink-0 aspect-square'
            >
              <Image src={basePath + selectedCurrency.CountryIconSrc} alt="Currency Icon" layout='responsive' width={100} height={100} />
            </div>
            <p className='text-[4.17vw]'>{selectedCurrency.Amount}</p>
          </div>
        )}

        <div className='flex gap-[3.95vw]'>
          <div className='flex gap-[2.29vw] items-center'>
            <div
              style={{ width: currencyIconSize }}
              className='shrink-0 aspect-square'
            >
              <Image src={basePath + selectedCurrency.CountryIconSrc} alt="Currency Icon" layout='responsive' width={100} height={100} />
            </div>
            <p className='text-[4.17vw]'>{selectedCurrency.Currency}</p>
          </div>
          <div
            style={{ width: dropDownButtonSize }}
            className='flex-shrink-0 bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] aspect-square rounded-2xl items-center justify-center flex'
          >
            <div style={{ width: dropDownArrowSize, aspectRatio: `${dropDownArrowAspectWidth} / ${dropDownArrowAspectHeight}` }}>
              <Image src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`} alt="Arrow" layout='responsive' width={100} height={100} />
            </div>
          </div>
        </div>


        {isOpen && (
          <div className="bg-[#1A1E27] w-full absolute left-0 bottom-0 z-20" style={{ transform: `translateY(calc(100% + ${dropDownOffset}px))` }}>
            <div className="flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10">
              {list.map((item, i) => (
                <button onClick={() => {
                  setCurrentlySelected(i);
                  setIsOpen(false);
                }} className='flex p-1 gap-2 w-full hover:bg-gray-600 cursor-pointer rounded-lg items-center' key={i}>
                  <Image src={basePath + item.CountryIconSrc} alt="Currency Icon" width={20} height={20}></Image>
                  <h3>{item.Amount}</h3>
                </button>
              ))}
            </div>
          </div>
        )}
      </button>
    </div>
  )
}

export default CurrencyDropdown