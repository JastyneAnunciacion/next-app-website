'use client';

import React, { useEffect, useState } from 'react'
import WalletTokenDropdown from './WalletTokenDropdown';
import WalletDropdown from './WalletDropdown';

interface WalletPopupProps {
    show: boolean,
    onClose: () => void,
}

const WalletPopup = ({ show, onClose }: WalletPopupProps) => {
    const [currentlySelected, setCurrentlySelected] = useState(0)

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [show]);

    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative w-[50rem] h-[35rem] bg-black border border-orange-500 p-5 shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-gray-300 hover:text-white"
                >
                    <p className="h-6 w-6 text-xl font-extrabold">X</p>
                </button>
                <div className='w-full flex justify-between mt-2 text-white font-semibold'>
                    <button
                        onClick={() => setCurrentlySelected(0)}
                        className={`${currentlySelected === 0 ? 'border-orange-500 text-orange-500 text-glow' : 'border-white text-gray-300'} border-b-2  w-full`}
                    >Deposit</button>
                    <button
                        onClick={() => setCurrentlySelected(1)}
                        className={`${currentlySelected === 1 ? 'border-orange-500 text-orange-500 text-glow' : 'border-white text-gray-300'} border-b-2  w-full`}
                    >Withdraw</button>
                    <button
                        onClick={() => setCurrentlySelected(2)}
                        className={`${currentlySelected === 2 ? 'border-orange-500 text-orange-500 text-glow' : 'border-white text-gray-300'} border-b-2  w-full`}
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

                {currentlySelected === 1 &&
                    <div className='flex flex-col items-center mt-4 gap-5'>
                        <div className='w-64 flex flex-col'>
                            <WalletDropdown />
                            <p className='text-white text-xs self-center'>Min. Deposit 0.0001 BTC</p>
                        </div>

                        <div className='w-80 flex flex-col gap-5'>
                            <div>
                                <p className='text-white font-semibold'>Your BTC Depositing address</p>
                                <input
                                    placeholder='Enter your address'
                                    className='w-full h-10 border border-orange-500 px-3 bg-transparent'
                                />
                            </div>

                            <div>
                                <div className='flex justify-between'>
                                    <p className='text-white font-semibold'>Amount</p>
                                    <p className='text-white font-semibold'>$0.00</p>
                                </div>
                                <div className='h-10 flex items-center'>
                                    <input
                                        placeholder='Enter your address'
                                        className='w-72 h-full border border-orange-500 px-3 bg-transparent'
                                    />
                                    <button className='bg-orange-600 h-full p-3 flex items-center text-white rounded-lg'>MAX</button>
                                </div>
                            </div>
                            <button className='bg-orange-600 text-glow w-64 self-center h-12 rounded-lg text-white font-bold'>Withdraw</button>
                            <p className='text-white text-center'>Requesting a withdrawal will mean that you forfeit all bonus funds</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default WalletPopup