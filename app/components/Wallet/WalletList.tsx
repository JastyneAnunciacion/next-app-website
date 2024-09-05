import React, { ReactNode } from 'react'

interface WalletListProps {
    title: string
    children: ReactNode
}

const WalletList = ({ title, children }: WalletListProps) => {
    return (
        <div>
            <p className='mb-[1.83%]'>{title}</p>
            <div className='flex flex-col gap-[1px]'>
                {children}
            </div>
        </div>
    )
}

export default WalletList