'use client'

import { ReactNode } from 'react'
import { useRef } from 'react';
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import basePath from '@/app/utilities/basepath';

interface QuickListProps {
  headerIconPath: string,
  title: string,
  childrenList: ReactNode,
  gapAmount?: number,
  viewAllLink?: string
}

const QuickList = ({ headerIconPath: headerImagePath, title, childrenList, gapAmount = 0, viewAllLink }: QuickListProps) => {
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollTo = (direction: 'left' | 'right') => {
    const list = listRef.current;
    if (!list) return;

    const scrollValue = 300;

    if (direction === 'right') {
      list.scrollTo({
        left: list.scrollLeft + scrollValue,
        behavior: 'smooth'
      });
    } else {
      list.scrollTo({
        left: list.scrollLeft - scrollValue,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <div className='pr-2'>
            <div className='h-7 w-7 bg-gray-300/20 rounded-full' />
            {/* <Image src={basePath + headerImagePath} alt="Quick List Icon" width={24} height={24}></Image> */}
          </div>
          <div className='font-bold text-white text-glow'>
            {title}
          </div>
        </div>
        <div className='flex items-center text-white'>
          {viewAllLink && (
            <Link href={viewAllLink} className='w-16 h-6 bg-orange-500 text-xs rounded-lg mr-2 flex items-center justify-center'>
              View All
            </Link>
          )}

          <button onClick={() => scrollTo('left')} className='w-6 h-6 bg-orange-500 text-xs rounded-lg mr-2'>
            <Image src={`${basePath}/images/left-arrow-image.png`} alt="Left Arrow" width={30} height={30} />
          </button>
          <button onClick={() => scrollTo('right')} className='w-6 h-6 bg-orange-500 text-xs rounded-lg mr-2'>
            <Image src={`${basePath}/images/right-arrow-image.png`} alt="Right Arrow" width={30} height={30} />
          </button>
        </div>
      </div>
      <div
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          overflowX: 'scroll',
        }}
        className={`flex overflow-x-auto scrollbar-none gap-${gapAmount}`} ref={listRef}>
        {childrenList}
      </div>
    </div>
  )
}

export default QuickList