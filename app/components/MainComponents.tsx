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
            <div className="flex w-full h-full flex-col">
                <Header />
                <SideBar />
                <div className='flex-1 overflow-auto flex flex-col items-center min-h-screen'>
                    <div className='flex flex-col mt-[66px] w-[min(1200px,90%)] flex-grow items-center gap-5'>
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