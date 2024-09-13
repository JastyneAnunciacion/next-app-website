'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'
import languages from '@/app/components/language-list.json'
import basePath from '../../utilities/basepath'
import MainComponents from '../../components/MainComponents'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Level from '@/app/components/Profile/MobileProfile/Level'
import Statistics from '@/app/components/Profile/MobileProfile/Statistics'
import Cashback from '@/app/components/Profile/MobileProfile/Cashback'
import TransactionHistoryTable from '@/app/components/Profile/MobileProfile/TransactionHistoryTable'

interface ProfileProps {
  username: string,
  dateJoined: string,
}

const items = languages.map(language => ({
  content: language.Language,
  onClick: () => {
    console.log(`Selected language: ${language.Language}`);
  }
}));

const ProfilePage = () => {
  const [option, changeOption] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth > 1024) {
          router.push('/');
        }
      };

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [router]);

  return (
    <MainComponents currentPage='Profile'>
      <div className='absolute w-full aspect-[561.36/295.08] flex-shrink-0 top-[26.81vw] z-0'>
        <Image className='z-0' src={`${basePath}/images/profile-page-bg-design.png`} alt='Large Profile BG ' layout='responsive' width={100} height={100} />
      </div>
      <div className='w-full max-w-[91.88%] font-manrope text-[3.33vw]'>
        <div className='relative flex items-center justify-between w-full h-[10.42vw] rounded-lg bg-[#241A43] z-10 px-[4.38vw]'>
          <p className='absolute left-1/2 transform -translate-x-1/2 text-[#b575e1] font-semibolds text-[4.17vw]'>Profile</p>
          <Link href='/pages/settings' className='flex-shrink-0 ml-auto w-[5.21vw] aspect-square'>
            <Image src={`${basePath}/images/cog-image.png`} alt='Profile Settings Icon' layout='responsive' width={100} height={100} />
          </Link>
        </div>


        <div className='mt-[7.08vw] mb-[6.44vw] gap-[2.94vw] flex flex-col items-center'>
          <div className='flex-shrink-0 w-[28.54vw] aspect-square'>
            <Image className='rounded-full' src={`${basePath}/images/temporary-profile-large-image.png`} alt='Large Profile Icon' layout='responsive' width={100} height={100} />
          </div>
          <p className='text-[4.17vw] font-medium'>Username</p>
        </div>

        <div className='w-full mb-[7.29vw]'>
          <Level />
        </div>

        <div className='flex flex-col gap-[7.29vw]'>
          <Statistics />
          <Cashback />
          <TransactionHistoryTable />
        </div>
      </div>
    </MainComponents>
  )
}

export default ProfilePage