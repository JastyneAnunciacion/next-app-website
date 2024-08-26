import React from 'react'
import ImageResponsive from '../ImageResponsive'

interface AffiliateUserStatInfoTemplateProps {
    title: string,
    value?: number,
    hasButton?: boolean
    buttonText?: string,
    tokenGap?: string,
    tokenWidth?: string,
    onClickButton?: () => void
}

const AffiliateUserStatInfoTemplate = ({
    title,
    value = 0.00,
    buttonText,
    onClickButton,
    hasButton = false,
    tokenGap = '5.08%',
    tokenWidth = '10.15%',
}: AffiliateUserStatInfoTemplateProps) => {
    return (
        <div
            style={{ padding: tokenGap }}
            className='relative bg-[#241A43] w-full h-full flex'>
            <p>{title}</p>
            <div
                style={{ gap: tokenGap }}
                className='absolute bottom-[22.99%] w-full flex items-center'
            >
                <ImageResponsive src='/images/tokens/thin-purple-BTC-icon.png' alt='Token Icon' width={tokenWidth} />
                <p>{value.toFixed(2)}</p>
            </div>
            {hasButton &&
                <button className='absolute w-[45.61%] rounded-md aspect-[91/22] bg-[#352C58] flex items-center justify-center right-[5.01%] gap-[5.49%] self-center'>
                    <ImageResponsive src='/images/purple-tip-jar-image.png' alt='Button Icon' width='7.69%' aspectWidth={14} aspectHeight={20} />
                    <p className='text-[0.97vw]'>{buttonText}</p>
                </button>
            }
        </div>
    )
}

export default AffiliateUserStatInfoTemplate