import React from 'react'
import CopyButton from './CopyButton'
import ImageResponsive from '../ImageResponsive'

interface CopyTextTemplate {
  textToCopy: string,
  textWidth?: string,
  hasLinkImage?: boolean
}

const CopyTextTemplate = ({ textToCopy, textWidth, hasLinkImage = false }: CopyTextTemplate) => {
  return (
    <>
      <div
        style={{ width: textWidth }}
        className={`text-ellipsis flex-shrink overflow-hidden whitespace-nowrap`}>
        {textToCopy}
      </div>
      <div className='w-[12.99%] aspect-square'>
        <CopyButton textToCopy={textToCopy} />
      </div>
    </>
  )
}

export default CopyTextTemplate