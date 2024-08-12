'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath';
import ProfileMedal from './Profile/ProfileMedal'

interface WalletPopupProps {
    show?: boolean,
    onClose?: () => void,
}

const ProfilePopup = ({ show = false, onClose }: WalletPopupProps) => {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-[#070123]/50 flex justify-center items-center z-50">
            <div className="h-[78.32vh] aspect-[89/138] bg-[#0B0330] text-white">
                <div className='relative w-full h-full pt-[2.89%]'>
                    <div className='absolute flex w-full items-center justify-between px-[3.37%]'>
                        <div className='w-[4.82%] aspect-square mr-[1.12%] flex items-center justify-center '>
                            <Image src={`${basePath}/images/gradient-purple-profile-image.png`} alt="Profile Icon" layout='responsive' width={100} height={100} />
                        </div>
                        <p className='mr-auto font-semibold font-montserrat-alternates text-[1.11vw]'>Profile</p>
                        <button
                            onClick={onClose}
                            className="text-[#67707B] text-[1.11vw] font-montserrat-alternates font-bold hover:text-white w-[8.09%] aspect-[18/17]"
                        >
                            X
                        </button>
                    </div>
                    <ProfileMedal />

                    <div className='w-full h-[18.12%] mt-[0.72%] px-[3.37%]'>
                        <div className='bg-[#281D4C] w-full h-full rounded'>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default ProfilePopup