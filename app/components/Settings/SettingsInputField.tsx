import React from 'react'

interface SettingsInputFieldProps {
    inputTitle: string,
    placeholder: string,
    isImportant?: boolean,
}

const SettingsInputField = ({ inputTitle, placeholder, isImportant = false }: SettingsInputFieldProps) => {
    return (
        <div>
            <p className='font-semibold pl-1'>{inputTitle}{isImportant && '*'}</p>
            <input
                placeholder={placeholder}
                className='bg-gray-600 rounded-lg p-2 h-12 w-96 outline-none focus:ring-0'
            />
        </div>
    )
}

export default SettingsInputField