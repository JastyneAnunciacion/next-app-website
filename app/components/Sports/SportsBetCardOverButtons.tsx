import React from 'react'
import SportsBetCardBetButton from './SportsBetCardBetButton'

const SportsBetCardOverButtons = () => {
  return (
    <div>
      <div className='grid grid-cols-2 grid-rows-3 gap-1'>
        <SportsBetCardBetButton labelText='1' amount={1.52} height={100} />
        <SportsBetCardBetButton labelText='1' amount={1.52} />
        <SportsBetCardBetButton labelText='1' amount={1.52} />
        <SportsBetCardBetButton labelText='1' amount={1.52} />
        <SportsBetCardBetButton labelText='1' amount={1.52} />
        <SportsBetCardBetButton labelText='1' amount={1.52} />
      </div>
    </div>
  )
}

export default SportsBetCardOverButtons