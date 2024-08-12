import React from 'react'
import QuickList from './QuickList'
import basePath from '@/app/utilities/basepath';
import Image from 'next/image';

interface GameCard {
  gameName: string,
  provider: string
}

interface QuickListGamesProps {
  headerImgSrc: string;
  gameListTitle: string;
  gameList: any[];
}

const QuickListGames = ({ headerImgSrc, gameListTitle, gameList }: QuickListGamesProps) => {
  return (
    <QuickList
      headerIconPath={headerImgSrc}
      title={gameListTitle}
      gapAmount='1.38%'
      viewAllLink='/games'
      childrenList={gameList.map((item, i) => {
        const imageIndex = Math.floor(Math.random() * 7) + 1;
        const imageIndex2 = Math.floor(Math.random() * 7) + 1;
        return (
          <div key={i} className=' w-[15.55%] aspect-[166/433] flex flex-col gap-[1.21vh] shrink-0'>
            <button className='w-full aspect-[83/105] shrink-0 overflow-hidden rounded-lg'>
              <Image src={`${basePath}/images/game-icon-${imageIndex}.png`} alt='Game Banner Image' layout='responsive' width={100} height={100} />
            </button>
            <button className='w-full aspect-[83/105] shrink-0 overflow-hidden rounded-lg'>
              <Image src={`${basePath}/images/game-icon-${imageIndex2}.png`} alt='Game Banner Image' layout='responsive' width={100} height={100} />
            </button>
          </div>
        );
      })}
    />
  )
}

export default QuickListGames