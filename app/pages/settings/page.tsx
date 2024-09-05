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
            HI
        </MainComponents>
    )
}

export default SettingsPage