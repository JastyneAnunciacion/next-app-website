import React from 'react'
import ImageResponsive from './ImageResponsive'

interface ShareButtonProps {
  side?: 'Left' | 'Right'
}

const ShareButton = ({ side = 'Right' }: ShareButtonProps) => {
  return (
    <div className={`bg-gradient-to-${side === 'Right' ? 'r' : 'l'} from-[#926dca] to-[#926dca]/0 w-full h-full p-[1px] rounded-[10px] lg:rounded-[5px]`}>
      <button className={`h-full w-full bg-gradient-to-${side === 'Right' ? 'r' : 'l'} from-[#412A78] to-[#221C42] flex items-center gap-[6.85%] ${side === 'Right' ? 'pl-[10.27%] justify-start' : 'pr-[10.27%] justify-end'} rounded-[10px] lg:rounded-[5px]`}>
        <ImageResponsive src='/images/purple-outline-share-image.png' alt='Share Icon' width='10.27%' />
        <p>Share</p>
      </button>
    </div>
  )
}

export default ShareButton