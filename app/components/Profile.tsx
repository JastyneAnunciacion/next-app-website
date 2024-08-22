'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath'
import Link from 'next/link'

interface ProfileProps {
    profileOnClick: () => void,
}

const Profile = ({ profileOnClick }: ProfileProps) => {

    return (
        <button onClick={profileOnClick} className='w-[2.77vw] aspect-square shrink-0 flex items-center justify-center bg-[#241A46] rounded-2xl'   >
            <Image src={`${basePath}/images/small-profile-image.png`} alt="Header Main Logo" layout='responsive' width={100} height={100} />
        </button>
    )
}

export default Profile