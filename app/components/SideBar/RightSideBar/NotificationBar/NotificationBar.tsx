import React from 'react'
import Notification from './Notification'

interface NotificationBarProps {
    show: boolean
}

const NotificationBar = ({ show }: NotificationBarProps) => {
    return (
        <div className={`shrink-0 fixed transition-width duration-300 w-[17.36vw] max-w-[380px] bg-[#070123] h-[90vh] flex flex-col text-white ${!show && 'translate-x-full'}`}>
            <p
                style={{ fontSize: 'clamp(1px, 0.97vw, 18.68px)' }}
                className='pl-[9.80%] mb-[3.92%] pt-[3.92%]'
            >
                Notification
            </p>
            <div
                style={{
                    WebkitOverflowScrolling: 'touch',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    overflowY: 'scroll',
                    overflowX: 'visible',
                }}
                className='pl-[5.88%] pr-[3.92%]'
            >
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className={`w-full aspect-[23/24] ${index != 9 && 'mb-[2.17%]'}`} key={index}>
                        <Notification />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NotificationBar