import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import SportsHeaderButton from './SportsHeaderButton';
import basePath from '@/app/utilities/basepath';

interface SportItem {
  sportImgSrc: string
  onClick: () => void;
}

interface SportsDropdownProps {
  sportsHeaderButton: SportItem[];
}

const SportsDropdown = ({ sportsHeaderButton }: SportsDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSport, setSelectedItem] = useState(0);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="relative bg-gray-800 text-white w-16 h-10 flex items-center font-bold rounded-lg justify-center gap-2"
      >
        <div>
          {sportsHeaderButton && <Image src={`${basePath + sportsHeaderButton[selectedSport].sportImgSrc}`} alt="Down Arrow" width={20} height={20} />}
        </div>
        {!isOpen
          ?
          <div>
            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={20} height={20} />
          </div>
          :
          <div>
            <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={20} height={20} />
          </div>
        }
        {isOpen && (
          <div className="bg-gray-800 absolute left-0 top-[40px] flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {sportsHeaderButton.map((item, i) => (
              <div
                onClick={() => {
                  item.onClick();
                  setSelectedItem(i);
                }}
                className="flex p-1 gap-2 w-full justify-center hover:bg-gray-600 cursor-pointer rounded-lg items-center"
                key={i}
              >
                <SportsHeaderButton imgSrc={item.sportImgSrc} />
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  )
}

export default SportsDropdown