import React from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const Notification = () => {
    return (
        <div className='w-[15.97vw] bg-[#170A35] h-[29.59vh] rounded-lg flex flex-col shrink-0 justify-between'>
            <div className='flex flex-col gap-[1.23vh] h-full px-[1.04vw] pt-[1.84vh] pb-[1.23vh]'>
                <div className='w-full flex justify-between text-[#9D87C9] font-medium'>
                    <p className='text-[0.83vw]'>24.07.2025</p>
                    <p className='text-[0.55vw]'>8:00 AM</p>
                </div>

                <div className='flex items-center gap-[0.35vw]'>
                    <div className='shrink-0 w-[1.04vw] aspect-square'>
                        <Image src={`${basePath}/images/purple-tools-image.png`} alt='Notification Type Icon' layout='responisve' width={100} height={100} />
                    </div>
                    <p className='font-semibold size text-[0.97vw]'>Weekly Maintenance</p>
                </div>

                <p className='font-medium text-[0.83vw] text-[#9D87C9] h-[7.4vh] text-ellipsis overflow-hidden'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className='self-end flex gap-[0.35vw] mt-[3.7%]'>
                    <p className='font-semibold text-[0.83vw]'>Show all</p>
                    <div className='shrink-0 w-[1.04vw] aspect-square'>
                        <Image src={`/images/white-filled-circle-arrow-down-image.png`} alt='Notification Type Icon' layout='responisve' width={100} height={100} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-start gap-[1.84vh] pb-[1.84vh]'>
                <div className='w-full h-[1px] bg-gradient-to-r from-[#070123] via-[#573A93] to-[#070123]' />
                <div className='font-semibold text-[0.69vw] h-[3.45vh] flex gap-[0.35vw] px-[1.04vw]'>
                    <button className='bg-[#890CEC] w-[29.57%] h-full rounded'>Details</button>
                    <button className='bg-[#2E2257] w-[29.57%] h-full rounded'>More</button>
                </div>
            </div>
        </div>
    )
}

export default Notification