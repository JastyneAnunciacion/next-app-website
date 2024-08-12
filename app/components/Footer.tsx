import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Footer = () => {
    return (
        <div className='relative w-full h-[34.27vh] flex mt-[3.47vh] justify-center text-white mb-[16.65vh]'>
            <div className='absolute flex flex-col w-full h-full gap-[2.83vh ]'>
                <div className='w-full flex gap-[1.38%]'>
                    <div className='w-[4.21%] aspect-square'>
                        <Image className='rounded-full' src={`/images/purple-phx-gamble-logo.png`} alt="Footer Main Logo" layout='responsive' width={100} height={100} />
                    </div>
                    <p className='font-offside text-[1.66vw]'>Phoenix Game</p>
                </div>
                <p className='w-[31.31%] text-[1.11vw] text-[#625873]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='absolute w-full h-full flex justify-end gap-[6.07%]'>
                <div>
                    <p className='text-[1.52vw] mb-[2.71vh]'>More</p>
                    <div className='text-[1.11vw] text-[#625873] flex flex-col gap-[1.23vh]'>
                        <p className='hover:underline cursor-pointer'>Download</p>
                        <p className='hover:underline cursor-pointer'>FAQ</p>
                        <p className='hover:underline cursor-pointer'>Rank</p>
                        <p className='hover:underline cursor-pointer'>Newsletter</p>
                    </div>
                </div>
                <div>
                    <p className='text-[1.52vw] mb-[2.71vh]'>Important Links</p>
                    <div className='text-[1.11vw] text-[#625873] flex flex-col gap-[1.23vh]'>
                        <p className='hover:underline cursor-pointer'>About us</p>
                        <p className='hover:underline cursor-pointer'>Questions</p>
                        <p className='hover:underline cursor-pointer'>Contact us</p>
                        <p className='hover:underline cursor-pointer'>Legal</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer