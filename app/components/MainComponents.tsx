import React, { ReactNode } from 'react'
import SideBar from './SideBar/SideBar'
import Header from './Header'
import Footer from './Footer'

interface MainComponentsProps {
    children: ReactNode
}

const MainComponents = ({ children }: MainComponentsProps) => {
    return (
        <main className='h-full w-full overflow-x-hidden pixel'>
            <div className="flex w-full h-full">
                <SideBar />
                <div className='flex-1 overflow-auto flex flex-col items-center min-h-screen'>
                    <Header />
                    <div className='flex flex-col w-[min(76rem,90%)] flex-grow items-center gap-5'>
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