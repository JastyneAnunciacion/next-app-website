'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import Link from 'next/link'

interface ProfileProps {
    walletOnClick: () => void,
}

const Profile = ({ walletOnClick }: ProfileProps) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className='relative'>
            <button onClick={() => setShowPopup((prev) => !prev)} className='w-[2.77vw] aspect-square shrink-0 flex items-center justify-center bg-[#241A46] rounded-2xl'   >
                <Image src={`${basePath}/images/small-profile-image.png`} alt="Header Main Logo" layout='responsive' width={100} height={100} />
            </button>

            {showPopup &&
                <div className='absolute top-11 left-[-3rem] z-10 bg-black border border-orange-600 border-dashed text-white p-2 flex flex-col gap-2'>
                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300/20 rounded-full' />
                        <button
                            className='hover:border-gray-200 border-b border-black'
                            onClick={walletOnClick}
                        >
                            Wallet
                        </button>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300/20 rounded-full' />
                        <Link href='/settings' className='hover:border-gray-200 border-b border-black'>
                            Settings
                        </Link>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300/20 rounded-full' />
                        <Link href='/settings' className='hover:border-gray-200 border-b border-black'>
                            Transactions
                        </Link>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300/20 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-black'>
                            Live Chat
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300/20 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-black'>
                            Logout
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile