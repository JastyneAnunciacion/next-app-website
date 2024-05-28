import React from 'react'
import Image from 'next/image'
import SportsSelectionButton from './SportsSelectionButton'

const SportsHomeTabButtons = () => {
  return (
    <div className='flex gap-2 my-2 font-semibold text-white text-sm'>
      <SportsSelectionButton buttonText='Highlights' />
      <SportsSelectionButton buttonText='Schedule' />
      <SportsSelectionButton buttonText='Bets Feed' />
    </div>
  )
}

export default SportsHomeTabButtons