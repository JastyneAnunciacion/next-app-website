import React from 'react'
import SettingsInputField from './SettingsInputField'
import Toggle from '../Toggle'

const SettingsAccountInfo = () => {
    return (
        <div className='self-start w-full flex flex-col gap-4 text-orange-500 text-glow'>
            <SettingsInputField
                inputTitle='Email'
                placeholder='exampleemail@email.com'
                isImportant={true}
            />
            <SettingsInputField
                inputTitle='Username'
                placeholder='exampleemail@email.com'
                isImportant={true}
            />

            <div className='border-b border-black' />

            <div className='flex gap-3'>
                <SettingsInputField
                    inputTitle='First name'
                    placeholder='First name'
                    isImportant={true}
                />
                <SettingsInputField
                    inputTitle='Last name'
                    placeholder='Last name'
                    isImportant={true}
                />
            </div>

            <div>
                <p className='font-semibold pl-1'>Date of birth*</p>
                <input
                    type='date'
                    className='border border-orange-500 bg-transparent border-dashed rounded-lg p-2 h-12 w-96 text-gray-400 outline-none focus:ring-0'
                />
            </div>

            <div className='border-b border-black' />

            <div className='flex gap-3'>
                <SettingsInputField
                    inputTitle='Country'
                    placeholder='Country'
                    isImportant={true}
                />
                <SettingsInputField
                    inputTitle='Postal Code'
                    placeholder='Postal Code'
                    isImportant={true}
                />
            </div>
            <div className='flex gap-3'>
                <SettingsInputField
                    inputTitle='Address'
                    placeholder='Address'
                    isImportant={true}
                />
                <SettingsInputField
                    inputTitle='City'
                    placeholder='City'
                    isImportant={true}
                />
            </div>

            <div className='border-b border-black' />

            <SettingsInputField
                inputTitle='Phone number'
                placeholder='Enter mobile number'
                isImportant={true}
            />

            <button className='bg-orange-600 w-48 rounded-md p-3 mt-4 font-semibold text-white mb-10'>
                Save
            </button>
        </div>
    )
}

export default SettingsAccountInfo