import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import WalletDropdown from './WalletDropdown';
// import ProfileButton from './ProfileButton';
import basePath from '../utilities/basepath';

const Header = () => {
  return (
    <header>
        <div className='p-2 flex items-center bg-gray-700'>
            <Link href="/">
                <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.jpeg`} alt="Header Main Logo" width={40} height={40} />
            </Link>
            <div className='flex ml-auto gap-2'>
              <div className='w-40'>
                <WalletDropdown />
              </div>
              <Link href="/wallet" className='w-10 h-10 bg-gray-900 rounded-xl text-white flex items-center justify-center text-3xl font-bold pb-[4px]'>+</Link>
              <div className='w-10 h-10 bg-gray-900 rounded-xl text-white flex items-center justify-center text-3xl font-bold pb-[4px]'>
                <Image className='rounded-full' src={`${basePath}/images/phx-gamble-logo.jpeg`} alt="Header Main Logo" width={30} height={30} />
              </div>
              {/* <ProfileButton /> */}
            </div>
        </div>
    </header>
  )
}

export default Header