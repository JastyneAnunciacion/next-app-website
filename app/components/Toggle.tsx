import React from 'react'

interface ToggleProps {
    toggleText?: string,
    bgIsDark?: boolean,
}

const Toggle = ({ toggleText, bgIsDark = false }: ToggleProps) => {
    return (
        <label className="inline-flex items-center mb-5 cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className={`relative w-11 h-6 bg-gray-200 rounded-full peer ${bgIsDark ? 'dark:bg-gray-400' : 'dark:bg-gray-700'} peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600`}></div>
            {toggleText &&
                <span className={`ms-3 text-sm font-medium ${bgIsDark ? 'text-white' : 'text-gray-900'}`}>{toggleText}</span>
            }
        </label>
    )
}

export default Toggle