'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ListItemProps {
  imgSrc?: string,
  itemName: string,
  linkHref?: string,
  textHexColor?: string,
  onClick?: () => void
}

const ListItem = ({ imgSrc = "", itemName, linkHref = "", onClick = () => { }, textHexColor }: ListItemProps) => {
  const textColor = textHexColor ? textHexColor : '#00000'
  return (
    <Link href={linkHref}>
      <button onClick={onClick} className='text-[3.33vw] font-medium w-full flex px-[5.42vw] gap-[1.88vw] items-center'>
        {imgSrc && (
          <div className='w-[4.58vw] aspect-square'>
            <Image src={imgSrc} alt='List Item' layout='responsive' width={100} height={100} />
          </div>
        )}
        <p style={{ color: textColor }}>{itemName}</p>
      </button>
    </Link>
  )
}

export default ListItem