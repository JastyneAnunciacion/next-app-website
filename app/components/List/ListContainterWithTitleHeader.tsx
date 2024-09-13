import React from 'react'
import { ReactNode } from 'react'
import ImageResponsive from '../ImageResponsive'

interface ListContainterWithTitleHeaderProps {
  title: string,
  children: ReactNode,
  imgSrc?: string
  hasBorderBottom?: boolean
  gap?: string
}

const ListContainterWithTitleHeader = ({ title, children, imgSrc, hasBorderBottom = true, gap }: ListContainterWithTitleHeaderProps) => {
  return (
    <div>
      <div className='flex w-full gap-[1.46vw] items-center text-[4.16vw] font-medium px-[2.08vw]'>
        {imgSrc && (
          <div className="bg-gradient-to-b w-[6.25vw] aspect-square from-[#9C6EF7] to-[#7727F7] rounded-full flex items-center justify-center shrink-0" >
            <ImageResponsive src={imgSrc} alt='List Icon' width='3.54vw' />
          </div>
        )}
        {title}
      </div>
      <div
        style={{ gap: gap, paddingBottom: gap }}
        className={`mt-[2.08vw] ${hasBorderBottom && 'border-b border-[#261E47]'} flex flex-col`}>
        {children}
      </div>
    </div>
  )
}

export default ListContainterWithTitleHeader