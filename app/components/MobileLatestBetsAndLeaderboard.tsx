'use client'

import React, { useState } from 'react'
import ImageResponsive from './ImageResponsive'

const MobileLatestBetsAndLeaderboard = () => {
    const [toggleOption, setToggleOption] = useState(0);
    return (
        <div className='w-full'>
            <div className='flex gap-[4.33vw] px-[5vw] items-center justify-start w-full mt-[1.46vw]'>
                <button
                    onClick={() => setToggleOption(0)}
                    className={`flex items-center gap-[1.04vw] py-[5vw] ${toggleOption === 0 && 'border-b border-[#9763F7]'}`}
                >
                    <ImageResponsive src={`/images/${toggleOption === 0 ? 'gradient-purple' : 'gray'}-fire-image.png`}
                        alt='Latest Bet Icon' width='3.79vw' aspectWidth={18.21} aspectHeight={20}
                    />
                    <p>Latest Bets</p>
                </button>
                <button
                    onClick={() => setToggleOption(1)}
                    className={`flex items-center gap-[1.04vw] py-[5vw] ${toggleOption === 1 && 'border-b border-[#9763F7]'}`}
                >
                    <ImageResponsive src={`/images/${toggleOption === 1 ? 'gradient-purple' : 'gray'}-trophy-image.png`}
                        alt='Leaderboard Icon' width='4.16'
                    />
                    <p>Leaderboard</p>
                </button>
            </div>
            <div className='border-t border-[#34375F]' />
        </div>
    )
}

export default MobileLatestBetsAndLeaderboard