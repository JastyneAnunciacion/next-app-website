import React from 'react'

const LeaderboardCountdown = () => {
    return (
        <div className='w-full lg:w-[33.08%] aspect-[432/153] lg:aspect-[353/160] bg-[#241A43] rounded-[5px] flex flex-col items-center justify-center'>
            <p className='text-[2.5vw] lg:text-[0.83vw] text-[#AEA8BE] mb-[5.08%]'>Time Remaining</p>
            <div className='w-full flex justify-center gap-[4.52%]'>
                <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                    <p className='font-extrabold text-[5vw] lg:text-[1.66vw] leading-[140%]'>03</p>
                    <p className='text-[#AEA8BE] text-[2.08vw] lg:text-[0.69vw]'>Hours</p>
                </div>
                <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                    <p className='font-extrabold text-[5vw] lg:text-[1.66vw] leading-[140%]'>42</p>
                    <p className='text-[#AEA8BE] text-[2.08vw] lg:text-[0.69vw]'>Minutes </p>
                </div>
                <div className='w-[18.08%] flex flex-col items-center justify-center aspect-square border rounded-[5px] border-[#4B348C] bg-[#170A35]'>
                    <p className='font-extrabold text-[5vw] lg:text-[1.66vw] leading-[140%]'>56</p>
                    <p className='text-[#AEA8BE] text-[2.08vw] lg:text-[0.69vw]'>Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardCountdown