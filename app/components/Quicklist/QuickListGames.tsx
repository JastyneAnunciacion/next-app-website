import React from 'react'
import QuickList from './QuickList'
import basePath from '@/app/utilities/basepath';

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
    <QuickList headerIconPath={`/images/temporary-image.png`} title={gameListTitle} gapAmount={3} viewAllLink='/games' childrenList={gameList.map((item, i) => (
      <div key={i}>
        <button className='bg-gray-600 w-40 h-32 rounded-lg cursor-pointer' />
        <div className='text-sm'>
          <p className='font-bold text-black'>Game Name</p>
          <p className='text-black'>Provider</p>
        </div>
      </div>
    ))} />
  )
}

export default QuickListGames