'use client'

import React, { useState } from 'react'
import MainComponents from '@/app/components/MainComponents'
import SettingsAccountInfo from '@/app/components/Settings/SettingsAccountInfo'
import SettingsActivity from '@/app/components/Settings/SettingsActivity'
import SettingsBonusHistory from '@/app/components/Settings/SettingsBonusHistory'
import SettingsTab from '@/app/components/Settings/SettingsTab'

const SettingsPage = () => {
    const [currentSectionSelected, setSectionSelected] = useState(0)
    return (
        <MainComponents>
            <div className='flex gap-3 px-3 self-start mt-2 text-white'>
                <button
                    onClick={() => (setSectionSelected(0))}
                    className={`${currentSectionSelected === 0 && 'border-b-4 border-orange-500 border-dashed text-orange-500 text-glow font-semibold'} text-lg`}
                >Account Info</button>
                <button
                    onClick={() => (setSectionSelected(1))}
                    className={`${currentSectionSelected === 1 && 'border-b-4 border-orange-500 border-dashed text-orange-500 text-glow font-semibold'} text-lg`}
                >Activity</button>
                <button
                    onClick={() => (setSectionSelected(2))}
                    className={`${currentSectionSelected === 2 && 'border-b-4 border-orange-500 border-dashed text-orange-500 text-glow font-semibold'} text-lg`}
                >Settings</button>
                <button
                    onClick={() => (setSectionSelected(3))}
                    className={`${currentSectionSelected === 3 && 'border-b-4 border-orange-500 border-dashed text-orange-500 text-glow font-semibold'} text-lg`}
                >Bonus History</button>
            </div>

            {currentSectionSelected == 0 &&
                <SettingsAccountInfo />
            }
            {currentSectionSelected == 1 &&
                <SettingsActivity />
            }
            {currentSectionSelected == 2 &&
                <SettingsTab />
            }
            {currentSectionSelected == 3 &&
                <SettingsBonusHistory />
            }

        </MainComponents>
    )
}

export default SettingsPage