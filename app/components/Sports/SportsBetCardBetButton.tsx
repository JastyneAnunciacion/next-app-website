import React from 'react'

interface SportsBetCardBetButtonProps {
  labelText: string,
  amount: number,
  onClick?: () => void,
  height?: number
}

const SportsBetCardBetButton = ({ labelText, amount, onClick, height }: SportsBetCardBetButtonProps) => {
  return (
    <button className={`bg-gray-600 p-1 w-full ${height ? `h-${height}px` : 'h-full'} flex justify-between items-center rounded-lg`}>
      <p className='text-gray-400'>{labelText}</p>
      <p>{amount}</p>
    </button>
  )
}

export default SportsBetCardBetButton