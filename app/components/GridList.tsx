import React from 'react'

interface GridListProps {
  list: any[]
}

const GridList = ({ list }: GridListProps) => {
  return (
    <div className="grid grid-cols-7 gap-4">
      {list.map((item, i) => (
        <div key={i}>
          <button className='bg-gray-300/20 w-40 h-28 rounded-lg mt-2 cursor-pointer' />
          <div className='text-sm'>
            <p className='font-bold text-orange-500 '>Game Name</p>
            <p className='text-white'>Provider</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default GridList