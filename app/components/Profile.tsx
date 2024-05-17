'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'

const Profile = () => {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className='relative'>
            <button onClick={() => setShowPopup((prev) => !prev)} className='shrink-0 rounded-full hover:bg-gray-800 h-9 w-9 flex justify-center items-center'>
                <Image src={`${basePath}/images/profile-image.png`} alt="Header Main Logo" width={20} height={20} />
            </button>

            {showPopup &&
                <div className='absolute top-11 left-[-3rem] z-10 bg-gray-800 text-white p-2 flex flex-col gap-2 rounded-md'>
                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-gray-800'>
                            Wallet
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-gray-800'>
                            Settings
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-gray-800'>
                            Transactions
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-gray-800'>
                            Live Chat
                        </p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <div className='h-6 w-6 bg-gray-300 rounded-full' />
                        <p className='hover:border-gray-200 border-b border-gray-800'>
                            Log out
                        </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile