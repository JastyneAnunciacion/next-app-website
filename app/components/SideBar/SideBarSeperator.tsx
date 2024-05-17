import React from 'react'

interface SideBarSeperatorProps {
    isSideBarOpen: boolean
}

const SideBarSeperator = ({ isSideBarOpen }: SideBarSeperatorProps) => {
    return (
        <li className='font-bold mb-4'>
            {isSideBarOpen ?
                (
                    <div>
                        _________________________
                    </div>
                )
                :
                (
                    <div>
                        _____
                    </div>
                )}
        </li>
    )
}

export default SideBarSeperator