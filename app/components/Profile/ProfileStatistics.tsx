import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const ProfileStatistics = () => {
    return (
        <>
            <div className='w-full aspect-[415/156] px-[3.37%] font-montserrat font-medium shrink-0'>
                <div className='relative bg-[#281D4C] w-full h-full rounded flex items-start'>
                    <div className='absolute w-full h-full pt-[4.82%] flex flex-col items-center'>
                        <div className='w-full flex items-center px-[3.61%]'>
                            <div className='w-[3.9%] aspect-square mr-[2.41%]'>
                                <Image src={`/images/blue-chart-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <p className='mr-auto text-[0.97vw]'>Medals</p>
                            <p className='mr-[1.20%] text-[0.83vw]'>Details</p>
                            <div className='w-[3.38%] aspect-square'>
                                <Image src={`/images/blue-arrow-right.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                        <div className='flex gap-[1.20%] mt-[4.34%] overflow-x-auto w-full'>
                            <div className='ml-[3.61%] w-[30.12%] aspect-[125/81] bg-[#1E143D] gap-[0.96%] items-center rounded-md justify-center flex flex-col'>
                                <p className='text-[0.69vw] text-[#87B9C9]'>Total Wins</p>
                                <p>0</p>
                            </div>
                            <div className='w-[30.12%] aspect-[125/81] bg-[#1E143D] gap-[0.96%] items-center rounded-md justify-center flex flex-col'>
                                <p className='text-[0.69vw] text-[#9D87C9]'>Total Bets</p>
                                <p>0</p>
                            </div>
                            <div className='mr-[3.61%] w-[30.12%] aspect-[125/81] bg-[#1E143D] gap-[0.96%] items-center rounded-md justify-center flex flex-col'>
                                <p className='text-[0.69vw] text-[#C987BE]'>Total Wagered</p>
                                <p>$0.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileStatistics