import React, { useState } from 'react';
import Image from 'next/image';
import basePath from '@/app/utilities/basepath';

interface SelectionDropdownItem {
  content: React.ReactNode;
  onClick: () => void;
}

interface SelectionDropdownProps {
  items: SelectionDropdownItem[];
  hasArrow?: boolean,
  placeArrowOnRight?: boolean;
  placeHolderText?: string;
}

const SelectionDropdown = ({ items, hasArrow = true, placeArrowOnRight = false, placeHolderText = '' }: SelectionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="relative border border-orange-600 text-white p-4 w-full h-10 flex justify-between items-center font-bold rounded-lg"
      >
        {hasArrow && !placeArrowOnRight && (
          !isOpen
            ?
            <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={40} height={40} />
            :
            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
        )}
        <div className='flex gap-1'>
          {placeHolderText && (
            <div className='text-orange-500'>
              {placeHolderText}
            </div>
          )}
          {items && items[selectedItem].content}
        </div>
        {hasArrow && placeArrowOnRight && (
          !isOpen
            ?
            <Image src={`${basePath}/images/down-arrow-image.png`} alt="Down Arrow" width={40} height={40} />
            :
            <Image src={`${basePath}/images/up-arrow-image.png`} alt="Up Arrow" width={40} height={40} />
        )}

        {isOpen && (
          <div className="bg-black border border-orange-600 absolute left-0 top-11 flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-10 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {items.map((item, i) => (
              <div
                onClick={() => {
                  item.onClick();
                  setSelectedItem(i);
                }}
                className="flex p-1 gap-2 w-full hover:bg-orange-600 cursor-pointer rounded-lg items-center"
                key={i}
              >
                {item.content}
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default SelectionDropdown;
