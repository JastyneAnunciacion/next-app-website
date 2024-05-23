import React from 'react'
import QuickList from './QuickList'
import basePath from '@/app/utilities/basepath';
import Image from 'next/image';

interface GameCard {
  gameName: string,
  provider: string
}

interface QuickListGamesProps {
  gameListTitle: string;
  gameList: any[];
}

const QuickListGames = ({ gameListTitle, gameList }: QuickListGamesProps) => {
  return (
    <QuickList
      headerIconPath="/images/pencil-circle-fill.256x256.png"
      title={gameListTitle}
      gapAmount={3}
      viewAllLink='/games'
      childrenList={gameList.map((item, i) => {
        const imageIndex = (i % 5) + 1;
        return (
          <div key={i}>
            <button className='bg-gray-600 w-[158px] h-[100px] rounded-lg mt-2 cursor-pointer'>
              <Image
                src={`${basePath}/images/small-image-${imageIndex}.jpg`}
                alt="Banner"
                width={20}
                height={20}
                className="w-full h-full rounded-lg"
              />
            </button>
            <div className='text-sm'>
              <p className='font-bold text-black'>{item.name ? item.name : 'Game Name'}</p>
              <p className='text-black'>{item.provider ? item.provider : 'Provider'}</p>
            </div>
          </div>
        );
      })}
    />
  )
}

export default QuickListGames