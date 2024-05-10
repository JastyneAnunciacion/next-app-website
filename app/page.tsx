import Image from 'next/image'
import Header from './components/Header'
import basePath from './utilities/basepath'

export default function Home() {
  return (
    <main>
      <Header />
      <div className='ml-10'>
        <div className='relative w-full h-[300px] bg-gray-400 p-5'>
          <p>PHX GAMBLE is</p>
          <div className='text-3xl font-extrabold'>
            <p>CRYPTO CASINO,</p>
            <p>SPORTS BETTING,</p>
            <p>BFG STAKING</p>
          </div>

          <button className='h-14 w-44 bg-gray-900 rounded-xl font-semibold text-sm text-whi flex items-center justify-center gap-2 text-white mt-4'>
            Make a Deposit
          </button>

          <div className='absolute h-20 w-10 right-0 top-16 bg-gray-900 rounded-l-xl flex flex-col items-center justify-center gap-3'>
            <button className='shrink-0'>
                <div className='h-7 w-7 bg-gray-300 rounded-full' />
            </button>
            <button className='shrink-0'>
                <div className='h-7 w-7 bg-gray-300 rounded-full' />
            </button>
          </div>
        </div>

        <div className='p-3 text-white text-xl font-bold'>
          {/*  */}
          <div className='w-full flex flex-col gap-2'>
            <div className='w-full flex gap-3'>
              <div className='w-full h-32 bg-slate-600 rounded-xl p-5'>
                Casino
              </div>
              <div className='w-full h-32 bg-slate-600 rounded-xl p-5'>
                Crypto Loans
              </div>
            </div>

            <div className='w-full flex gap-3'>
              <div className='w-full h-64 flex flex-col gap-3'>
                <div className='w-full shrink-0 h-32 bg-slate-600 rounded-xl p-5'>
                  Futures
                </div>
                <div className='w-full shrink-0 h-32 bg-slate-600 rounded-xl p-5'>
                  Sports
                </div>
              </div>
              
              <div className='w-full h-[270px] bg-slate-600 rounded-xl p-5'>
                Earn
              </div>

            </div>
          </div>
          {/*  */}

          <div className='w-full h-28 bg-gray-500 mt-10 rounded-xl flex items-center justify-between gap-3 p-6'>
            <div className='flex items-center gap-6'>
              <p>Buy Crypto Quickly and Easily</p>
              {/* <p>G Pay</p>
              <p>Apple Pay</p>
              <p>MasterCard</p>
              <p>VISA</p> */}
            </div>
            <button className='h-14 w-44 bg-gray-900 rounded-xl font-semibold text-sm shrink-0 flex items-center justify-center gap-2 text-white mt-4'>
              Buy Crypto
            </button>
          </div>
        </div>

      </div>
    </main>
  )
}
