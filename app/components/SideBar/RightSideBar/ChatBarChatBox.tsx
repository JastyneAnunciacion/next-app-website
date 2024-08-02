'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import basePath from '@/app/utilities/basepath'

const ChatBarChatBox = () => {
    const chatBarRef = useRef<HTMLDivElement>(null);
    const [marginTop, setMarginTop] = useState(0);

    useEffect(() => {
        if (chatBarRef.current) {
            setMarginTop(chatBarRef.current.offsetHeight);
        }
    }, []);

    return (
        <div>
            <div ref={chatBarRef} className='fixed w-[17.36vw] aspect-[125/27] bottom-0 right-0 bg-[#1A0938] border-t border-[#231744] rounded-tl-lg flex items-center justify-center'>
                <div className='w-[88%] aspect-[110/17] rounded-lg pl-[4.54%] pr-[2.72%] bg-[#070123] flex items-center'>
                    <input placeholder='Hello, guys!' className='w-full flex-grow text-[0.83vw] h-full bg-[#070123] text-white text-sm outline-none focus:ring-0 rounded-lg' />
                    <button className='w-[4.54%] aspect-square flex-none flex items-center justify-center rounded-full'>
                        <Image src={`${basePath}/images/purple-smiley-image.png`} alt='Emote Button icon' layout='responsive' width={100} height={100} />
                    </button>
                    <button className='w-[10%] ml-[4.54%] aspect-square flex-none flex items-center justify-center bg-[#9B34FD] rounded-lg'>
                        <div className='w-[36.36%] aspect-square'>
                            <Image src={`${basePath}/images/white-up-right-arrow-image.png`} alt='Send icon' layout='responsive' width={100} height={100} />
                        </div>
                    </button>
                </div>
            </div>
            <div style={{ marginTop }} className='w-[17.36vw] aspect-[125/27]' />
        </div>
    )
}

export default ChatBarChatBox
