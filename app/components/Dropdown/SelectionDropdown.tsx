import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import basePath from '../../utilities/basepath';

interface SelectionDropdownItem {
  content: React.ReactNode;
  onClick: () => void;
}

interface SelectionDropdownProps {
  items: SelectionDropdownItem[];
  hasArrow?: boolean;
  placeArrowOnRight?: boolean;
  placeHolderText?: string;
  arrowButtonSize?: string;
  arrowSize?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

const SelectionDropdown = ({
  items,
  hasArrow = true,
  placeArrowOnRight = false,
  placeHolderText = '',
  arrowButtonSize = '7.5vw',
  arrowSize = '2.5vw',
  paddingLeft = '3.96vw',
  paddingRight = '4.79vw',
}: SelectionDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(0);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative w-full h-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
        className="relative bg-[#241b42] w-full h-full flex justify-between items-center rounded-2xl"
      >
        {hasArrow && !placeArrowOnRight && (
          <div
            style={{ width: arrowButtonSize }}
            className="border aspect-square rounded-lg items-center justify-center flex"
          >
            <div
              style={{ width: arrowSize }}
              className="aspect-[4/5]"
            >
              <Image src={`${basePath}/images/${isOpen ? 'up-thin-arrow-image.png' : 'down-thin-arrow-image.png'}`} alt="Arrow" layout="responsive" width={100} height={100} />
            </div>
          </div>
        )}
        <div className="flex gap-1">
          {placeHolderText && (
            <div className="text-gray-400">
              {placeHolderText}
            </div>
          )}
          {items && items[selectedItem].content}
        </div>
        {hasArrow && placeArrowOnRight && (
          <div
            style={{ width: arrowButtonSize }}
            className="border aspect-square rounded-2xl items-center justify-center flex"
          >
            <div
              style={{ width: arrowSize }}
              className="aspect-[4/5]"
            >
              <Image src={`${basePath}/images/${isOpen ? 'up-thin-arrow-image.png' : 'down-thin-arrow-image.png'}`} alt="Arrow" layout="responsive" width={100} height={100} />
            </div>
          </div>
        )}

        {isOpen && (
          <div className="bg-[#241b42] absolute left-0 bottom-0 transform translate-y-full flex flex-col rounded-lg p-2 w-full max-h-[260px] overflow-y-auto z-20 scrollbar scrollbar-thumb-gray-950 scrollbar-track-gray-900">
            {items.map((item, i) => (
              <div
                onClick={() => {
                  item.onClick();
                  setSelectedItem(i);
                  setIsOpen(false);
                }}
                className="flex p-1 gap-2 w-full hover:bg-[#402977] cursor-pointer rounded-lg items-center"
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
