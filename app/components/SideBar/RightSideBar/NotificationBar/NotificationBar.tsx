import React, { useState } from 'react'
import Notification from './Notification'

interface NotificationBarProps {
    show: boolean
}

const NotificationBar = ({ show }: NotificationBarProps) => {
    return (
        <>
            <div className={`shrink-0 fixed transition-width duration-300 w-[17.71vw] pt-[10px] bg-[#070123] h-[90vh] flex flex-col text-white ${!show && 'translate-x-full'}`}>
                <p className='pl-[2.54vw] mb-[10px]'>Notification</p>
                <div
                    style={{
                        WebkitOverflowScrolling: 'touch',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        overflowY: 'scroll',
                        overflowX: 'visible',
                    }}
                    className='flex flex-col items-end pr-[0.69vw] gap-[5px] mb-[6px]'
                >
                    {Array.from({ length: 18 }).map((_, index) => (
                        <Notification key={index} />
                    ))}
                </div>
            </div >
        </>
    )
}

export default NotificationBar