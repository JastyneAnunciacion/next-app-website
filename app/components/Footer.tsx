import React from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Footer = () => {
    return (
        <div className='w-full bg-black mt-5 flex justify-center '>
            <div className='w-[min(76rem,90%)] h-full'>
                <div className='grid grid-cols-4 text-white text-xl gap-16 p-10'>
                    <div className='flex flex-col gap-2'>
                        <div className='shrink-0'>
                            <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.png`} alt="Footer Main Logo" width={100} height={100} />
                        </div>
                        <p className='font-extrabold'>PHX.GAMBLE</p>

                    </div>

                    <div>
                        <p className='font-bold'>About Us</p>
                        <div className='text-sm text-gray-300 mt-3 flex flex-col gap-3'>
                            <p className='border-b border-black hover:border-white'>Terms & Conditions</p>
                            <p className='border-b border-black hover:border-white'>Responsible Gambling</p>
                            <p className='border-b border-black hover:border-white'>AML Policy</p>
                            <p className='border-b border-black hover:border-white'>Privacy Policy</p>
                            <p className='border-b border-black hover:border-white'>Help</p>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold'>Casino</p>
                        <div className='text-sm text-gray-300 mt-3 flex flex-col gap-3'>
                            <p className='border-b border-black hover:border-white'>Bonus Terms & Conditions</p>
                            <p className='border-b border-black hover:border-white'>Promotions</p>
                            <p className='border-b border-black hover:border-white'>Casino</p>
                            <p className='border-b border-black hover:border-white'>Slots</p>
                            <p className='border-b border-black hover:border-white'>Live Casino</p>
                            <p className='border-b border-black hover:border-white'>Crypto Casino</p>
                        </div>
                    </div>

                    <div>
                        <p className='font-bold'>Sports</p>
                        <div className='text-sm text-gray-300 mt-3 flex flex-col gap-3'>
                            <p className='border-b border-black hover:border-white'>Sports</p>
                            <p className='border-b border-black hover:border-white'>Sportsbook Terms & Conditions</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex gap-2'>
                        {/* replace with image of licenses */}
                        <div className='w-9 h-9 bg-gray-400 rounded-xl' />
                        <div className='w-24 h-9 bg-gray-400 rounded-xl' />
                        <div className='w-16 h-9 bg-gray-400 rounded-xl' />
                    </div>
                    <p className='text-xs border'>{`PHX.GAMBLE is operated by MIBS N.V., a company registered in the Commercial Register of Curaçao with number 162031 and address Zuikertuintjeweg Z/N (Zuikertuin Tower), Willemstad, Curacao. MIBS N.V. is duly licensed through a sublicense, pursuant to Master Gaming License #365/JAZ issued by the Governor of Curaçao.`}</p>
                    <p className='text-xs border'>© 2024 phx.gamble | All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer