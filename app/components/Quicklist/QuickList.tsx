'use client'

import { ReactNode, useEffect, useState } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import basePath from '@/app/utilities/basepath';

interface QuickListProps {
  headerIconPath: string;
  title: string;
  childrenList: ReactNode;
  gapAmount?: string;
  viewAllLink?: string;
}

const QuickList = ({ headerIconPath: headerImagePath, title, childrenList, gapAmount = '0px', viewAllLink }: QuickListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const scrollTo = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollValue = 300;

    if (direction === 'right') {
      list.scrollTo({
        left: list.scrollLeft + scrollValue,
        behavior: 'smooth',
      });
    } else {
      list.scrollTo({
        left: list.scrollLeft - scrollValue,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const list = listRef.current;
    if (!list) return;

    const isStart = list.scrollLeft === 0;
    const isEnd = list.scrollWidth - list.clientWidth === list.scrollLeft;

    setIsAtStart(isStart);
    setIsAtEnd(isEnd);
  };

  useEffect(() => {
    const list = listRef.current;
    if (list) {
      const isOverflowing = list.scrollWidth > list.clientWidth;
      setIsOverflowing(isOverflowing);

      list.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        list.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className='flex flex-col gap-[1.85vh] text-white font-montserrat'>
      <div className='relative h-[2.47vh] flex items-center gap-[0.35vw] w-full'>
        <div className='absolute w-full flex gap-[0.35vw] h-full items-center'>
          <div className='h-full aspect-square'>
            <Image src={basePath + headerImagePath} alt="Quick List Icon" layout='responsive' width={100} height={100} />
          </div>
          <div className='font-medium text-[0.97vw]'>
            {title}
          </div>
        </div>

        <div className='absolute w-full h-full flex items-center justify-end'>
          {viewAllLink && (
            <Link href={viewAllLink} className='w-[4.21%] h-full text-[0.45vw] rounded-lg mr-2 flex items-center justify-center border border-[#3B335D]'>
              View All
            </Link>
          )}
          {isOverflowing && (
            <>
              <button
                onClick={() => scrollTo('left')}
                className={`w-[1.87%] h-full flex items-center justify-center text-xs rounded-l-2xl ${isAtStart ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
                disabled={isAtStart}
              >
                <p className={`text-[0.45vw] font-mono ${isAtStart ? 'text-gray-400' : 'text-gray-300'}`}>&lt;</p>
              </button>
              <button
                onClick={() => scrollTo('right')}
                className={`w-[1.87%] h-full flex items-center justify-center text-xs rounded-r-2xl ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
                disabled={isAtEnd}
              >
                <p className={`text-[0.45vw] font-mono ${isAtEnd ? 'text-gray-400' : 'text-gray-300'}`}>&gt;</p>
              </button>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflowX: 'scroll',
          gap: gapAmount,
        }}
        className={`flex overflow-x-auto scrollbar-none`} ref={listRef}>
        {childrenList}
      </div>
    </div>
  );
};

export default QuickList;
