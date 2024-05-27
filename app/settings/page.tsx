'use client'

import React, { useState } from 'react'
import MainComponents from '../components/MainComponents'
import SettingsInputField from '../components/Settings/SettingsInputField'
import SettingsAccountInfo from '../components/Settings/SettingsAccountInfo'
import SettingsActivity from '../components/Settings/SettingsActivity'
import SettingsBonusHistory from '../components/Settings/SettingsBonusHistory'
import SettingsTab from '../components/Settings/SettingsTab'

const SettingsPage = () => {
    const [currentSectionSelected, setSectionSelected] = useState(0)
    return (
        <MainComponents>
            <div className='flex gap-3 px-3 self-start mt-2'>
                <button
                    onClick={() => (setSectionSelected(0))}
                    className={`${currentSectionSelected === 0 && 'border-b-4 border-black font-semibold'} text-lg`}
                >Account Info</button>
                <button
                    onClick={() => (setSectionSelected(1))}
                    className={`${currentSectionSelected === 1 && 'border-b-4 border-black font-semibold'} text-lg`}
                >Activity</button>
                <button
                    onClick={() => (setSectionSelected(2))}
                    className={`${currentSectionSelected === 2 && 'border-b-4 border-black font-semibold'} text-lg`}
                >Settings</button>
                <button
                    onClick={() => (setSectionSelected(3))}
                    className={`${currentSectionSelected === 3 && 'border-b-4 border-black font-semibold'} text-lg`}
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