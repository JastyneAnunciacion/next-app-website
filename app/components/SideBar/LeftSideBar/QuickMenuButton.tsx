import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import basePath from '../../../utilities/basepath';

interface QuickMenuButtonProps {
  buttonName: string;
  iconSrc: string;
  iconActiveSrc: string;
  activeTextColor: string;
  pageHref: string;
  active: boolean;
}

const QuickMenuButton = ({ buttonName, iconSrc, iconActiveSrc, activeTextColor, pageHref, active }: QuickMenuButtonProps) => {
  const iconStatus = active ? iconActiveSrc : iconSrc;
  const textColor = active ? activeTextColor : '#00000'
  return (
    <div>
      <Link href={pageHref} className={`${active && 'pointer-events-none'} flex flex-col gap-[0.83vw] items-center`}>
        <div className='w-[4.58vw] aspect-square'>
          <Image src={basePath + iconStatus} alt='Footer Button Image' layout='responsive' width={100} height={100} />
        </div>
        <div style={{ color: textColor }}>
          {buttonName}
        </div>
      </Link >
    </div >
  )
}

export default QuickMenuButton