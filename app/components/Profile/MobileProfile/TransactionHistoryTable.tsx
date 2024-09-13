import React from 'react'

const TransactionHistoryTable = () => {
    return (
        <div className='flex flex-col gap-[5vw]'>
            <div className='flex flex-col gap-[1.88vw] items-center justify-center '>
                <p className='text-[#D187FF] text-[4.17vw]'>Transactions</p>
                <div className='flex flex-col w-full aspect-[44/29] bg-[#241b42] rounded-2xl overflow-hidden'>
                    <div className='flex w-full aspect-[440/41] bg-[#6b6483] items-center justify-between pl-[4.17vw]'>
                        <p className='w-full p-2'>Type</p>
                        <p className='w-full p-2'>Amount</p>
                        <p className='w-full p-2'>Status</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <button className='border-[#3B335D] border rounded-lg w-[22.5vw] aspect-[108/41] flex text-[2.92vw] items-center justify-center'>
                    Load More
                </button>
            </div>
        </div>
    )
}

export default TransactionHistoryTable