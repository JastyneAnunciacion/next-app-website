import React from 'react'
import Image from 'next/image'
import basePath from '../../utilities/basepath';


const ProfileMedal = () => {
    return (
        <>
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

            <div className='w-full h-[18.12%] mt-[3.16%] px-[3.37%] font-montserrat font-medium'>
                <div className='relative bg-[#281D4C] w-full h-full rounded flex items-start'>
                    <div className='absolute w-full px-[3.61%] pt-[4.82%] flex flex-col items-center'>
                        <div className='w-full flex items-center'>
                            <div className='w-[3.9%] aspect-square mr-[2.41%]'>
                                <Image src={`${basePath}/images/yellow-cake-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <p className='mr-auto text-[0.97vw]'>Medals</p>
                            <p className='mr-[1.20%] text-[0.83vw]'>Details</p>
                            <div className='w-[3.38%] aspect-square'>
                                <Image src={`${basePath}/images/yellow-arrow-right.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                        <div className='flex gap-[2.59%] mt-[4.34%]'>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                            <div className='w-[12.99%] aspect-square'>
                                <Image src={`${basePath}/images/phoenix-medal-image.png`} alt="Medal Image" layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileMedal