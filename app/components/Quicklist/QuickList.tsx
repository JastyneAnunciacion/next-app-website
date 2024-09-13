'use client'

import { ReactNode, useEffect, useState } from 'react';
import { useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import basePath from '@/app/utilities/basepath';
import ImageResponsive from '../ImageResponsive';

interface QuickListProps {
  headerIconPath: string;
  title: string;
  children: ReactNode;
  gapAmount?: string;
  viewAllLink?: string;
  widthScroll?: number;
}

const QuickList = ({ headerIconPath: headerImagePath, title, children, gapAmount = '0px', viewAllLink, widthScroll = 300 }: QuickListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const scrollTo = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollValue = widthScroll;

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
      console.log('scrollWidth:', list.scrollWidth);
      console.log('clientWidth:', list.clientWidth);
      console.log('isOverflowing:', isOverflowing);
      setIsOverflowing(isOverflowing);

      list.addEventListener('scroll', handleScroll);
      handleScroll();

      return () => {
        list.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <>
      {/* Web Version */}
      <div className='hidden lg:flex flex-col gap-[1.04vw] text-white font-montserrat'>
        <div className='relative h-[1.39vw] flex items-center gap-[0.35vw] w-full'>
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
            overflowX: isOverflowing ? 'scroll' : 'visible',
            gap: gapAmount,
          }}
          className={`flex scrollbar-none`} ref={listRef}>
          {children}
        </div>
      </div>

      {/* Mobile Version */}
      <div className={`flex flex-col gap-[4.37vw] items-center font-manrope lg:hidden`}>
        <div className='flex w-full items-center justify-between max-w-[91.88%]'>

          <div className='w-full flex items-center gap-[2.08vw]'>
            <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
              <ImageResponsive src={headerImagePath} alt='Header Icon' width='2.5vw' />
            </div>
            <p className='text-[4.16vw] w-full flex-shrink text-nowrap'>{title}</p>
          </div>

          <div className='flex items-center gap-[2.71vw] w-full'>
            {viewAllLink && (
              <div className=' ml-auto'>
                <Link href={viewAllLink} className='w-[19.17vw] aspect-[92/41] border border-[#332a61] text-[2.91vw] rounded-md flex items-center justify-center'>
                  View All
                </Link>
              </div>
            )}

            <div className='flex gap-[0.21vw] items-center font-rubik font-medium text-[4.17vw] justify-center'>
              <button
                onClick={() => scrollTo('left')}
                className={`w-[8.33vw] aspect-square flex items-center justify-center rounded-l-3xl ${isAtStart ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
                disabled={isAtStart}
              >
                <p className={`${isAtStart ? 'text-gray-400' : 'text-gray-300'}`}>&lt;</p>
              </button>
              <button
                onClick={() => scrollTo('right')}
                className={`w-[8.33vw] aspect-square flex items-center justify-center rounded-r-3xl ${isAtEnd ? 'bg-[#231d42]/70' : 'bg-[#2a2444]'}`}
                disabled={isAtEnd}
              >
                <p className={`${isAtEnd ? 'text-gray-400' : 'text-gray-300'}`}>&gt;</p>
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ gap: gapAmount, paddingLeft: gapAmount }}
          className={`flex w-full overflow-x-auto scrollbar-none`} ref={listRef}>
          {children}
        </div>
      </div >
    </>
  );
};

export default QuickList;
