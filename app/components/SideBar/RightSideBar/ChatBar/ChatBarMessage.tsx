import React from 'react'
import ImageResponsive from '@/app/components/ImageResponsive'

const ChatBarMessage = () => {
    return (
        <div className='w-full h-full shrink-0 p-[4.35%] bg-[#170A35] rounded-lg flex flex-col'>
            <div
                style={{ fontSize: 'clamp(1px, 0.55vw , 10.67px)' }}
                className='flex w-full justify-between text-[#9D87C9] font-medium mb-[3.33%]'
            >
                <div className='flex w-full items-center gap-[0.35vw]'>
                    <ImageResponsive src='/images/2xs-profile-image.png' alt='User Profile Picture' width='7.14%' />
                    <p>@username99</p>
                </div>

                <p className='text-nowrap'>8:00 PM</p>
            </div>

            <div
                style={{ fontSize: 'clamp(1px, 0.69vw , 13.34px)' }}
                className='text-[#A28CBE] font-semibold w-[77.14%]'
            >
                <p>Hello, what’s up? Hello, what’s up?</p>
            </div>
        </div>
    )
}

export default ChatBarMessage