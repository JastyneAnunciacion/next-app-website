import React from 'react'
import CopyButton from './CopyButton'
import ImageResponsive from '../ImageResponsive'

interface CopyTextTemplate {
  textToCopy: string,
  textWidth?: string,
  hasLinkImage?: boolean
  copyIconWidth?: string
  copyButtonWidth?: string
}

const CopyTextTemplate = ({
  textToCopy,
  textWidth,
  copyIconWidth = '27.5%',
  copyButtonWidth = '12.99%'
}: CopyTextTemplate) => {
  return (
    <>
      <div
        style={{ width: textWidth }}
        className={`text-ellipsis flex-shrink overflow-hidden whitespace-nowrap`}>
        {textToCopy}
      </div>
      <div
        style={{ width: copyButtonWidth }}
        className='w-[12.99%] aspect-square shrink-0'
      >
        <CopyButton textToCopy={textToCopy} iconWidth={copyIconWidth} />
      </div>
    </>
  )
}

export default CopyTextTemplate