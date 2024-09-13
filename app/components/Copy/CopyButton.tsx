'use client'

import React from 'react'
import { useState } from 'react'
import ImageResponsive from '../ImageResponsive'

interface CopyButtonProps {
    textToCopy: string
    iconWidth?: string
}

const CopyButton = ({ textToCopy, iconWidth = '27.5%' }: CopyButtonProps) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button onClick={copyToClipboard} className='w-full h-full bg-[#352C58] flex items-center justify-center rounded-[10px] lg:rounded-[5px] shrink-0'>
            <ImageResponsive src='/images/purple-copy-image.png' alt='Copy Icon' width={iconWidth} aspectWidth={11} aspectHeight={15} />
        </button>
    )
}

export default CopyButton