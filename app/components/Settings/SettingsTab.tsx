import React from 'react'
import SelectionDropdown from '../Dropdown/SelectionDropdown'
import Toggle from '../Toggle';
import DropdownExpand from '../Dropdown/DropdownExpand';
import SettingsInputField from './SettingsInputField';

const SettingsTab = () => {
    const languages = [
        { value: 'English EN' },
    ]

    const language = languages.map(languageSelection => ({
        content: languageSelection.value,
        onClick: () => {
            console.log(`Selected option: ${languageSelection.value}`);
        }
    }));

    const preferredFiatDisplayCurrencies = [
        { value: 'USD $' },
        { value: 'EUR €' },
    ]

    const fiatCurrency = preferredFiatDisplayCurrencies.map(fiatCurrencySelection => ({
        content: fiatCurrencySelection.value,
        onClick: () => {
            console.log(`Selected option: ${fiatCurrencySelection.value}`);
        }
    }));

    return (
        <div className='self-start flex flex-col gap-3 text-orange-500'>
            <div className='w-[774px] flex gap-2'>
                <div className='w-full'>
                    <p className='font-semibold pl-1'>Language</p>
                    <SelectionDropdown items={language} placeArrowOnRight={true} />
                </div>
                <div className='w-full'>
                    <p className='font-semibold pl-1'>Preferred Fiat Display Currency</p>
                    <SelectionDropdown items={fiatCurrency} placeArrowOnRight={true} />
                </div>
            </div>

            <div className='w-[774px]'>
                <p className='underline font-bold'>Communication</p>
                <div className='grid grid-cols-2 gap-2'>
                    <Toggle toggleText='Receieve Marketing emails' />
                    <Toggle toggleText='Receieve Marketing SMS' />
                </div>
            </div>

            <div>
                <p className='underline font-bold'>Privacy</p>
                <div>
                    <Toggle toggleText='Hide my Username' />
                </div>
            </div>

            <div>
                <p className='underline font-bold'>Security</p>
                <div className='w-[410px]'>
                    <DropdownExpand title='Change password' isArrowOnRight={true}>
                        <div className='p-3 text-orange-500  flex flex-col gap-4'>
                            <SettingsInputField
                                inputTitle='Old password'
                                isImportant={true}
                            />
                            <SettingsInputField
                                inputTitle='New password'
                                isImportant={true}
                            />
                            <SettingsInputField
                                inputTitle='Confrim new password'
                                isImportant={true}
                            />
                            <button className='self-start w-40 h-10 bg-orange-600 text-white  rounded-lg font-semibold'>
                                Save
                            </button>
                        </div>
                    </DropdownExpand>
                </div>
            </div>
        </div>
    )
}

export default SettingsTab