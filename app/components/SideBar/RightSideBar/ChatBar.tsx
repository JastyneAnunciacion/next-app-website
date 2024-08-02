import React from 'react'
import ChatBarMessage from './ChatBarMessage'
import ChatBarChatBox from './ChatBarChatBox'

const ChatBar = () => {
    return (
        <>
            <div className={`shrink-0 fixed transition-width duration-300 w-[17.71vw] pt-[10px] bg-[#070123] h-full flex flex-col text-white`}>
                <p className='pl-[2.54vw] mb-[10px]'>Chat</p>
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
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                    <ChatBarMessage />
                </div>
                <ChatBarChatBox />
            </div >
            <div className='shrink-0 w-[17.71vw] h-full border text-white'>aaaaaaa</div>
        </>
    )
}

export default ChatBar