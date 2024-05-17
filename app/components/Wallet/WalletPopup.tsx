import React, { useState } from 'react'
import WalletTokenDropdown from './WalletTokenDropdown';

interface WalletPopupProps {
    show: boolean,
    onClose: () => void,
}

const WalletPopup = ({ show, onClose }: WalletPopupProps) => {
    if (!show) return null;

    const [currentlySelected, setCurrentlySelected] = useState(0)
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative w-[50rem] h-[30rem] bg-gray-600 p-5 rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-gray-300 hover:text-white"
                >
                    <p className="h-6 w-6 text-xl font-extrabold">X</p>
                </button>
                <div className='w-full flex justify-between mt-2 text-white font-semibold'>
                    <button
                        onClick={() => setCurrentlySelected(0)}
                        className={`${currentlySelected === 0 ? 'border-white text-white' : 'border-gray-500 text-gray-300'} border-b-2  w-full`}
                    >Deposit</button>
                    <button
                        onClick={() => setCurrentlySelected(1)}
                        className={`${currentlySelected === 1 ? 'border-white text-white' : 'border-gray-500 text-gray-300'} border-b-2  w-full`}
                    >Withdraw</button>
                    <button
                        onClick={() => setCurrentlySelected(2)}
                        className={`${currentlySelected === 2 ? 'border-white text-white' : 'border-gray-500 text-gray-300'} border-b-2  w-full`}
                    >Buy Crypto</button>
                </div>

                {currentlySelected === 0 &&
                    <div className='flex flex-col items-center mt-4'>
                        <div className='w-36'>
                            <WalletTokenDropdown />
                        </div>
                        <p className='text-white text-xs'>Min. Deposit 0.0001 BTC</p>
                        <div>
                            <p className='text-white font-semibold'>Your BTC Depositing address</p>
                            <p className='text-white text-xs'>Only send BTC to this address, 1 confirmation(s) required. Values sent below the minimum deposit or to an incorrect address will be lost.</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default WalletPopup