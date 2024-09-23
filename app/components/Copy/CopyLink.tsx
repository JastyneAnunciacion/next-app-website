import React from 'react'
import CopyTextTemplate from './CopyTextTemplate'
import ImageResponsive from '../ImageResponsive'
import CopyButton from './CopyButton'

interface CopyLinkProps {
    textToCopy: string
}

const CopyLink = ({ textToCopy }: CopyLinkProps) => {
    return (
        <div className='border border-[#4B348C] rounded-md bg-[#170A35] text-[#AEA8BE] flex items-center gap-[3.25%] pl-[4.87%] pr-[1.62%] py-[1.62%]'>
            <ImageResponsive src='/images/purple-chain-image.png' alt='Chain Link Icon' width='4.87%' />
            <div
                className={`text-ellipsis flex-shrink overflow-hidden whitespace-nowrap`}>
                {textToCopy}
            </div>
            <div
                className='w-[12.99%] aspect-square shrink-0'
            >
                <CopyButton textToCopy={textToCopy} iconWidth={'27.5%'} />
            </div>
        </div>
    )
}

export default CopyLink