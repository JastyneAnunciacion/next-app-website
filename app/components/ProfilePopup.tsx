'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import basePath from '../utilities/basepath';
import ProfileMedal from './Profile/ProfileMedal'
import ProfileStatistics from './Profile/ProfileStatistics';
import ProfileGameDataBox from './Profile/ProfileGameDataBox';

interface WalletPopupProps {
    show?: boolean,
    onClose?: () => void,
}

const ProfilePopup = ({ show = true, onClose }: WalletPopupProps) => {
    const popUpDivRef = useRef<HTMLDivElement>(null);
    const [fixedElementStyle, setFixedElementStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
            updateFixedElementStyle();

            window.addEventListener('resize', updateFixedElementStyle);

            return () => {
                document.body.style.overflow = 'unset';

                window.removeEventListener('resize', updateFixedElementStyle);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show]);

    useEffect(() => {
        updateFixedElementStyle();
    }, []);

    const updateFixedElementStyle = () => {
        if (popUpDivRef.current) {
            const { width, top, left } = popUpDivRef.current.getBoundingClientRect();
            setFixedElementStyle({
                width,
                top,
                left,
                position: 'fixed',
            });
        }
    };

    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-[#070123]/50 flex justify-center items-center z-50">
            <div
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowY: 'scroll',
                    overflowX: 'hidden',
                }}
                className="h-[78.32vh] aspect-[89/138] bg-[#0B0330] text-white overflow-hidden overflow-y-auto font-montserrat"
            >
                <div
                    ref={popUpDivRef}
                    className='relative w-full h-full pt-[2.89%]'
                >
                    <div
                        style={{ ...fixedElementStyle }}
                        className='fixed flex w-full aspect-[445/52] px-[1.04vw] items-center justify-between bg-[#0B0330] z-10'
                    >
                        <div className='w-[4.82%] aspect-square mr-[1.12%] flex items-center justify-center'>
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

                    <div className='absolute w-full mt-[12.03%] px-[3.37%] flex justify-between'>
                        <div className='w-[11.69%] aspect-[26/17] bg-[#281D4C] rounded-lg flex gap-[19.23%] items-center justify-center'>
                            <div className='w-[23.07%] aspect-[12/11] mr-[1.12%] flex items-center justify-center '>
                                <Image src={`${basePath}/images/green-heart-image.png`} alt="Heart Icon" layout='responsive' width={100} height={100} />
                            </div>
                            <p>0</p>
                        </div>

                        <div className='w-[8.09%] aspect-[18/17] bg-[#281D4C] rounded-lg flex items-center justify-center'>
                            <button className='w-[30.56%] aspect-square mr-[1.12%] flex items-center justify-center '>
                                <Image src={`${basePath}/images/white-pencil-image.png`} alt="Pencil Icon" layout='responsive' width={100} height={100} />
                            </button>
                        </div>
                    </div>

                    <div className='w-full flex flex-col items-center mt-[11.56%] px-[3.37%]'>
                        <div className='w-[15.51%] mb-[2.22%] aspect-square'>
                            <Image src={`${basePath}/images/md-temporary-profile-image.png`} alt="Profile Image" layout='responsive' width={100} height={100} />
                        </div>
                        <p className='font-montserrat-alternates font-semibold text-[1.25vw] leading-[1.52vw]'>Username</p>
                        <p className='text-[#AEA8BE] font-montserrat font-medium text-[0.83vw] leading-[1.02vw]'>User ID: 42305345</p>
                    </div>

                    <div className='w-full h-full flex flex-col gap-[0.72%] mt-[4.89%]'>
                        <ProfileMedal />
                        <ProfileStatistics />
                        <ProfileGameDataBox title='Top 3 Favorite Games' />
                        <ProfileGameDataBox title='Wager Contest' />
                        <p className='flex justify-center w-full text-[#AEA8BE] pt-[3.61%] text-[0.83vw]'>Joined on 7/23/2024</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProfilePopup