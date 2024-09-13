import React from 'react'

interface LevelProps {
    level?: number,
    currentXP?: number,
    XPrequirement?: number,
}
const Level = ({ level = 1, currentXP = 3, XPrequirement = 10 }: LevelProps) => {
    return (
        <div className='w-full'>
            <div className='w-full flex flex-col gap-[1.04vw]'>
                <div className='w-full aspect-[441/38] bg-[#241b42] rounded-full items-center flex justify-center'>
                    <div className='h-full w-full py-[3.13vw] px-[2.5vw] bg-[#241b42] rounded-full'>
                        <div className='h-full bg-[#1fe384] rounded-full'
                            style={{ width: `${(currentXP / XPrequirement) * 100}%` }}
                        />
                    </div>
                </div>
                <div className='flex justify-between px-[2.08vw]'>
                    <p className='text-[#D187FF]'>Level {level}</p>
                    <div className='flex'>
                        <p>{currentXP}</p>
                        <p>/{XPrequirement}XP</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Level