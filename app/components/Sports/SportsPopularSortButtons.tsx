import React from 'react'
import SportsSelectionButton from './SportsSelectionButton'

const SportsPopularSortButtons = () => {
  return (
    <div>
        <div className='flex scrollbar overflow-auto gap-1 text-white text-sm'>
            <SportsSelectionButton buttonText='Soccer' />
            <SportsSelectionButton buttonText='Tennis' />
            <SportsSelectionButton buttonText='Basketball' />
            <SportsSelectionButton buttonText='Ice Hockey' />
            <SportsSelectionButton buttonText='FIFA' />
            <SportsSelectionButton buttonText='Table Tennis' />
            <SportsSelectionButton buttonText='Counter-Strike' />
        </div>
    </div>
  )
}

export default SportsPopularSortButtons