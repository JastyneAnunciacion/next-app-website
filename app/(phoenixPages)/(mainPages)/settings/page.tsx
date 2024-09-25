'use client'

import React, { useEffect } from 'react'
import ImageResponsive from '@/app/components/ImageResponsive';
import SelectionButtonsWithIcons from '@/app/components/SelectionButtonsWithIcons';
import { useRouter } from 'next/navigation';


const SettingsPage = () => {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => {
                if (window.innerWidth < 1024) {
                    router.push('/');
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, [router]);
    return (
        <div className='text-white font-montserrat font-medium text-[0.83vw]'>
            <div className='w-full flex flex-col'>
                <div className='flex items-center gap-[0.47%] mb-[1.86%]'>
                    <ImageResponsive src='/images/gradient-purple-cog-image.png' alt='Settings Logo' width='1.87%' />
                    <p className='font-montserrat-alternates text-[1.25vw] font-semibold'>Global Settings</p>
                </div>
            </div>
            <div className='flex justify-between mb-[28.04%]'>
                <div className='bg-[#1B1237] h-fit w-[16.26%] p-[0.93%] rounded-[5px]'>
                    <SelectionButtonsWithIcons
                        defaultIconSrc='/images/violet-drawer-image.png'
                        selectedIconSrc='/images/drawer-image.png'
                        iconWidth='12.1%'
                        iconAspectWidth={15}
                        iconAspectHeight={13.85}
                        buttonText='Account Info'
                        isSelected={true}
                    />
                    <SelectionButtonsWithIcons
                        defaultIconSrc='/images/violet-security-image.png'
                        selectedIconSrc='/images/security-image.png'
                        iconWidth='12.48%'
                        iconAspectWidth={15.48}
                        iconAspectHeight={16}
                        buttonText='Securtiy'
                        isSelected={false}
                        hasAlert={true}
                    />
                    <SelectionButtonsWithIcons
                        defaultIconSrc='/images/violet-preferences-image.png'
                        selectedIconSrc='/images/preferences-image.png'
                        iconWidth='12.1%'
                        iconAspectWidth={15}
                        iconAspectHeight={13.75}
                        buttonText='Preferences'
                        isSelected={false}
                    />
                    <SelectionButtonsWithIcons
                        defaultIconSrc='/images/violet-verified-image.png'
                        selectedIconSrc='/images/verified-image.png'
                        iconWidth='9.51%'
                        iconAspectWidth={11.79}
                        iconAspectHeight={15}
                        buttonText='Verification'
                        isSelected={false}
                    />
                    <SelectionButtonsWithIcons
                        defaultIconSrc='/images/violet-credit-card-image.png'
                        selectedIconSrc='/images/credit-card-image.png'
                        iconWidth='12.1%'
                        iconAspectWidth={15}
                        iconAspectHeight={11.79}
                        buttonText='Payment Methods'
                        isSelected={false}
                        isLast={true}
                    />
                </div>

                <div className='w-[82.334%]'>
                    <div className='w-full bg-[#241A43] rounded-[5px] p-[2.84%] mb-[0.57%]'>
                        <p className='text-[0.97vw] font-bold mb-[1.48%]'>Profile Info</p>
                        <div className='w-full h-[1px] bg-[#2F2551] mb-[1.93%]' />
                        <div className='flex items-center'>
                            <ImageResponsive src='/images/md-temporary-profile-image.png' alt='Profile Image' width='6.81%' />
                            <div className='flex flex-col w-[44.19%] ml-[2.41%]'>
                                <p className='text-[#DDDDDD] font-semibold text-[1.11vw]'>Username</p>
                                <p className='text-[#AEA8BE] text-[0.83vw]'>User ID: 42305345</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-[#241A43] rounded-[5px] p-[2.84%]'>
                        <p className='text-[0.97vw] font-bold mb-[1.48%]'>Conctact Info</p>
                        <div className='w-full h-[1px] bg-[#2F2551] mb-[1.93%]' />
                        <div className='flex justify-between items-center mb-[2.40%]'>
                            <div className='flex flex-col w-[44.19%]'>
                                <p className='text-[#DDDDDD] font-semibold text-[1.11vw]'>E-mail Verification</p>
                                <p className='text-[#AEA8BE] text-[0.83vw] text-nowrap'>Verify your email address is valid and accessible to you.</p>
                            </div>
                            <button className='w-[10.83%] aspect-[3/1] bg-[#02CC00] rounded-[5px] flex items-center justify-center'>
                                <ImageResponsive src='/images/pencil-image.png' alt='Edit Icon' width='11.11%' />
                                <p className='font-bold ml-[5.56%]'>Add</p>
                            </button>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <div className='flex flex-col w-[44.19%]'>
                                <p className='text-[#DDDDDD] font-semibold text-[1.11vw]'>Phone Number</p>
                                <p className='text-[#AEA8BE] text-[0.83vw] text-nowrap'>Verify your phone number and you can use the phone as your second login method.</p>
                            </div>
                            <button className='w-[10.83%] aspect-[3/1] bg-[#02CC00] rounded-[5px] flex items-center justify-center'>
                                <ImageResponsive src='/images/pencil-image.png' alt='Edit Icon' width='11.11%' />
                                <p className='font-bold ml-[5.56%]'>Add</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage