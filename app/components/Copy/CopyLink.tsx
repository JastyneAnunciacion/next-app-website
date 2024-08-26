import React from 'react'
import CopyTextTemplate from './CopyTextTemplate'
import ImageResponsive from '../ImageResponsive'

interface CopyLinkProps {
    textToCopy: string
}

const CopyLink = ({ textToCopy }: CopyLinkProps) => {
    return (
        <div className='border border-[#4B348C] rounded-md bg-[#170A35] text-[#AEA8BE] flex items-center gap-[3.25%] pl-[4.87%] pr-[1.62%] py-[1.62%]'>
            <ImageResponsive src='/images/purple-chain-image.png' alt='Chain Link Icon' width='4.87%' />
            <CopyTextTemplate textToCopy={textToCopy} />
        </div>
    )
}

export default CopyLink