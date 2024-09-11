import React from 'react'
import ImageResponsive from '@/app/components/ImageResponsive'

const Notification = () => {

    return (
        <div className='w-full h-full bg-[#170A35] rounded-lg flex flex-col p-[6.52%]'>
            <div className='w-full flex justify-between text-[#9D87C9] font-medium mb-[4.35%]'>
                <p style={{ fontSize: 'clamp(1px, 0.83vw , 16px)' }}>24.07.2025</p>
                <p style={{ fontSize: 'clamp(1px, 0.55vw , 10.67px)' }}>8:00 AM</p>
            </div>

            <div className='flex items-center gap-[2.17%] mb-[4.35%]'>
                <ImageResponsive src='/images/purple-tools-image.png' alt='Notification Type Icon' width='7.5%' />
                <p
                    style={{ fontSize: 'clamp(1px, 0.97vw , 18.68px)' }}
                    className='font-semibold size'
                >
                    Weekly Maintenance</p>
            </div>

            <p
                style={{ fontSize: 'clamp(1px, 0.83vw , 16px)', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 3 }}
                className='font-medium h-[25%] text-[#9D87C9] mb-[13.04%] overflow-hidden text-ellipsis'
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className='flex justify-end items-center gap-[0.35vw] w-full mb-[4.35%]'>
                <p
                    style={{ fontSize: 'clamp(1px, 0.83vw , 16px)' }}
                    className='font-semibold'
                >
                    Show all</p>
                <ImageResponsive src='/images/white-filled-circle-arrow-down-image.png' alt='Show all Icon' width='7.5%' />
            </div>

            <div className='w-full h-[1px] mb-[6.52%] bg-gradient-to-r from-[#070123] via-[#573A93] to-[#070123]' />

            <div
                style={{ fontSize: 'clamp(1px, 0.69vw , 13.34px)' }}
                className='font-semibold text-[0.69vw] flex gap-[2.17%]'
            >
                <button className='bg-[#890CEC] w-[34%] aspect-[17/7] rounded-lg'>Details</button>
                <button className='bg-[#2E2257] w-[34%] aspect-[17/7] rounded-lg'>More</button>
            </div>
        </div>
    )
}

export default Notification
