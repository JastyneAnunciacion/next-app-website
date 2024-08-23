import React from 'react'
import QuickList from './QuickList'

interface QuickListProvidersProps {
    providerList: any[];
}

const QuickListProviders = ({ providerList: gameList }: QuickListProvidersProps) => {
    return (
        <QuickList title='Game Providers' headerIconPath={`/images/temporary-image.png`} gapAmount={'3px'} viewAllLink='/games' >
            {gameList.map((item, i) => (
                <div key={i}>
                    <button className='bg-gray-200/20 w-40 h-24 rounded-lg cursor-pointer' />
                </div>
            ))}
        </QuickList>
    )
}

export default QuickListProviders