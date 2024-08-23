'use client'

import React, { useEffect, useRef, useState } from 'react'
import QuickList from './QuickList'
import basePath from '@/app/utilities/basepath';
import Image from 'next/image';

interface QuickListGamesProps {
  headerImgSrc: string;
  gameListTitle: string;
  gameList: any[];
  rows?: 1 | 2 | 3 | 4;
}

const QuickListGames = ({ headerImgSrc, gameListTitle, gameList, rows = 4 }: QuickListGamesProps) => {
  const columns = Math.ceil(gameList.length / rows);
  const fullWidthRefDiv = useRef<HTMLDivElement>(null);
  const [fullWidth, setFullWidth] = useState<number>(0);
  const [gapX, setGapX] = useState<string>('1.38%');
  const [gapY, setGapY] = useState<string>('0.92%');

  useEffect(() => {
    const handleResize = () => {
      if (fullWidthRefDiv.current) {
        const getFullWidth = fullWidthRefDiv.current.offsetWidth;
        setFullWidth(getFullWidth);
        const calculatedGapX = (fullWidth * 0.0138).toFixed(2);
        setGapX(`${calculatedGapX}px`);
        const calculatedGapY = (fullWidth * 0.0092).toFixed(2);
        setGapY(`${calculatedGapY}px`);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize); // Update on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on unmount
    };
  }, []);

  const renderGameIcons = (rowIndex: number) => {
    return Array.from({ length: columns }).map((_, columnIndex) => {
      const gameIndex = rowIndex + columnIndex * rows;
      const imageIndex = Math.floor(Math.random() * 7) + 1;

      if (gameIndex >= gameList.length) return null; // Avoid rendering extra buttons if the gameList is not perfectly divisible by rows

      return (
        <button key={columnIndex} className='w-full aspect-[83/105] shrink-0 overflow-hidden rounded-lg'>
          <Image
            src={`${basePath}/images/game-icon-${imageIndex}.png`}
            alt='Game Banner Image'
            layout='responsive'
            width={100}
            height={100}
          />
        </button>
      );
    });
  };

  return (
    <QuickList
      headerIconPath={headerImgSrc}
      title={gameListTitle}
      gapAmount='1.38%'
      viewAllLink='/games'
      widthScroll={fullWidth}
    >
      <div ref={fullWidthRefDiv} className='w-full'>
        <div
          style={{ gap: gapY }}
          className='w-full flex flex-col'
        >
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              style={{ gap: gapX }}
              className='w-[15.55%] flex shrink-0'
            >
              {renderGameIcons(rowIndex)}
            </div>
          ))}
        </div>
      </div>
    </QuickList>
  );
}

export default QuickListGames;


