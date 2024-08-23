import React from 'react'
import QuickList from './QuickList';
import Image from 'next/image';

interface QuickListSportsProps {
    highlightedSportsList: any[];
}

const temporaryList = [
    { id: 1, name: 'Football', imagePath: '/images/football.png' },
    { id: 2, name: 'Basketball', imagePath: '/images/basketball.png' },
    { id: 3, name: 'Tennis', imagePath: '/images/tennis.png' }
];

const QuickListSports = ({ highlightedSportsList }: QuickListSportsProps) => {
    return (
        <QuickList
            headerIconPath="/images/gradient-purple-sports-image.png"
            title='Sports'
            gapAmount='1.31%'
            viewAllLink='/games'
            children={temporaryList.map((item, i) => {
                return (
                    <button key={i} className='relative bg-[#170A35] w-[32.42%] aspect-[347/185] rounded-lg border border-[#231744] flex items-center justify-center'>
                        <Image className='absolute mix-blend-screen' src={`/images/sports-quick-list-vs-image.png`} alt='VS Image' layout='responsive' width={100} height={100} />
                        <div className='absolute w-full h-full pl-[8.93%] pt-[9.25%] flex flex-col items-start'>
                            <div className='w-[23.34%] ml-[1.73%] aspect-square'>
                                <Image className='mix-blend-screen' src={`/images/md-barcelona-icon.png`} alt='Team Icon Image' layout='responsive' width={100} height={100} />
                            </div>
                            <p className='text-[1.25vw] font-light'>Barcelona</p>
                            <div className='w-[8.07%] aspect-[4/3] text-[0.69vw] bg-[#2E1E51] flex items-center justify-center rounded-md'>1.15</div>
                        </div>

                        <div className='absolute bg-[#2E1E51] top-[2.59%] w-[13.25%] aspect-[23/11] flex items-center justify-center gap-[10.87%] rounded-lg'>
                            <div className='w-[21.74%] aspect-square'>
                                <Image className='mix-blend-screen' src={`/images/sports-quick-list-temporary-timer-image.png`} alt='Team Icon Image' layout='responsive' width={100} height={100} />
                            </div>
                            <p className='font-medium text-[0.69vw]'>Live</p>
                        </div>

                        <div className='absolute w-full h-full pr-[8.93%] pt-[9.25%] flex flex-col items-end'>
                            <div className='w-[23.34%] mr-[1.73%] aspect-square'>
                                <Image className='mix-blend-screen' src={`/images/md-barcelona-icon.png`} alt='Team Icon Image' layout='responsive' width={100} height={100} />
                            </div>
                            <p className='text-[1.25vw] font-light'>Barcelona</p>
                            <div className='w-[8.07%] aspect-[4/3] text-[0.69vw] font-medium bg-[#2E1E51] flex items-center justify-center rounded-md'>1.15</div>
                        </div>

                        <div className='absolute bg-[#2E1E51] top-[5.40%] right-[2.88%] w-[7.78%] aspect-[27/26] flex items-center justify-center gap-[10.87%] rounded-lg'>
                            <div className='w-[40.74%] aspect-[11/10]'>
                                <Image className='mix-blend-screen' src={`/images/sm-purple-heart-image.png`} alt='Timer Icon Image' layout='responsive' width={100} height={100} />
                            </div>
                        </div>
                    </button>
                );
            })}
        />
    )
}

export default QuickListSports