import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

interface ImageResponsiveProps {
    src: string,
    alt: string,
    width: string,
    aspectWidth?: number
    aspectHeight?: number,
    rounded?: 'rounded-none' | 'rounded-sm' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full'
}

const ImageResponsive = ({ src, alt, width, aspectWidth = 1, aspectHeight = 1, rounded = 'rounded-none' }: ImageResponsiveProps) => {
    return (
        <div
            style={{
                width: width,
                aspectRatio: `${aspectWidth}/${aspectHeight}`,
                flexShrink: 0
            }}
        >
            <Image className={`${rounded}`} src={`${src}`} alt={alt} layout='responsive' width={100} height={100} />
        </div>
    )
}

export default ImageResponsive