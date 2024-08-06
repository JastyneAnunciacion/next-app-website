import React from 'react'
import Image from 'next/image'

const ChatBarMessage = () => {
    return (
        <div className='w-[90.2%] aspect-[115/33] shrink-0 p-[4.76%] box-border bg-[#170A35] rounded-lg flex flex-col gap-2'>
            <div className='flex w-full justify-between text-[#9D87C9] text-[0.56vw] font-[500]'>

                <div className='flex w-full items-center gap-[0.35vw]'>
                    <div className='w-[1.04vw] aspect-square '>
                        <Image src={'/images/2xs-profile-image.png'} alt='User Profile Picture' width={100} height={100} />
                    </div>
                    <p>@username99</p>
                </div>

                <p className='text-nowrap'>8:00 PM</p>
            </div>

            <div className='text-[#A28CBE] font-[600] w-[70.43%]'>
                <p>Hello, what’s up? Hello, what’s up?</p>
            </div>
        </div>
    )
}

export default ChatBarMessage