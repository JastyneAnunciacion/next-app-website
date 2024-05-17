import React, { ReactNode } from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header'
import Footer from './Footer'

interface MainComponentsProps {
    children: ReactNode
}

const MainComponents = ({ children }: MainComponentsProps) => {
    return (
        <main className='h-full w-full overflow-x-hidden'>
            <div className="flex w-full h-full">
                <SideBar />
                <div className='w-full flex flex-col items-center'>
                    <Header />
                    <div className='flex flex-col w-[min(76rem,90%)] items-center gap-5'>
                        {children}
                    </div>
                    <div className='self-start w-full'>
                        <Footer />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainComponents