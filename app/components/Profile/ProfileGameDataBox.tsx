import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'
import { profile } from 'console'

interface ProfileGameDataBoxProps {
    title: string
}

const ProfileGameDataBox = ({ title }: ProfileGameDataBoxProps) => {
    return (
        <>
            <div className='w-full aspect-[415/262] px-[3.37%] font-montserrat font-medium shrink-0'>
                <div className='relative bg-[#281D4C] w-full h-full rounded flex items-start'>
                    <div className='absolute w-full h-full pt-[4.82%] flex flex-col items-center'>
                        <div className='w-full flex items-center px-[3.61%]'>
                            <p className='text-[0.97vw]'>{title}</p>
                        </div>
                    </div>
                    <div className='relative w-full h-full flex flex-col items-center mt-[14.46%]'>
                        <div className=' w-[36.623%] aspect-square flex items-center justify-center '>
                            <Image src={`/images/grayscale-phoenix-mascot-image.png`} alt="Profile Icon" layout='responsive' width={100} height={100} />
                        </div>
                        <p className='absolute text-[0.97vw] text-[#9D87C9]' style={{ top: 'calc(52%)' }}>Oops! There is no data yet!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileGameDataBox