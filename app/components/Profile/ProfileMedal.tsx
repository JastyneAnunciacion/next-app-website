import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath';


const ProfileMedal = () => {
    return (
        <>
            <div className='w-full aspect-[83/25] px-[3.37%] font-montserrat font-medium shrink-0'>
                <div className='relative bg-[#281D4C] w-full h-full rounded flex items-start'>
                    <div className='absolute w-full h-full pt-[4.82%] flex flex-col items-center'>
                        <div className='w-full flex items-center px-[3.61%]'>
                            <div className='w-[3.9%] aspect-square mr-[2.41%]'>
                                <Image src={`${basePath}/images/yellow-cake-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <p className='mr-auto text-[0.97vw]'>Medals</p>
                            <p className='mr-[1.20%] text-[0.83vw]'>Details</p>
                            <div className='w-[3.38%] aspect-square'>
                                <Image src={`${basePath}/images/yellow-arrow-right.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                        <div
                            style={{
                                WebkitOverflowScrolling: 'touch',
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none',
                                overflowY: 'hidden',
                                overflowX: 'scroll',
                            }}
                            className='flex gap-[2.41%] mt-[4.34%] overflow-x-auto w-full'
                        >
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div className={`w-[12.05%] aspect-square shrink-0 ${index === 0 && 'ml-[3.61%]'} ${index === 5 && 'mr-[3.61%]'}`} key={index}>
                                    <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMedal