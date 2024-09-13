'use client'

import React, { useEffect, useRef, useState } from 'react'
import list from '@/app/components/wallet-list.json'
import Image from 'next/image'
import basePath from '../../utilities/basepath'
import Toggle from '../Toggle'

interface WalletDropdownProps {
    paddingLeft?: string
    paddingRight?: string
    arrowBoxSize?: string
}

const WalletDropdown = ({ paddingLeft = '2.92vw', arrowBoxSize = '6.25vw', paddingRight = '3.13vw' }: WalletDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentlySelected, setCurrentlySelected] = useState(0);
    const [dropdownTop, setDropdownTop] = useState<number | null>(null);

    const mainDivRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (mainDivRef.current && isOpen) {
            const rect = mainDivRef.current.getBoundingClientRect();
            setDropdownTop(rect.bottom + window.scrollY);
        }
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleItemClick = (index: number) => {
        setCurrentlySelected(index);
        setIsOpen(false);
    };

    const selectedWallet = list[currentlySelected];

    return (
        <div
            ref={mainDivRef}
            className='relative bg-gradient-to-r text-[4.17vw] font-manrope from-[#A379DF] to-[#221C42]/0 w-full h-full p-[0.21vw] flex items-center justify-center rounded-lg'
        >
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                style={{ paddingLeft: paddingLeft, paddingRight: paddingRight }}
                className={`relative bg-gradient-to-r from-[#412A78] to-[#221C42] w-full h-full text-white flex items-center justify-between rounded-lg`}
            >
                {selectedWallet && (
                    <div className='absolute flex h-full w-full items-center gap-[2.29vw]'>
                        <div className='w-[6.25vw] aspect-square'>
                            <Image src={basePath + selectedWallet.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
                        </div>
                        <p className='overflow-hidden text-ellipsis whitespace-nowrap w-full text-[4.16vw] font-manrope text-left'>
                            {selectedWallet.Amount}
                        </p>
                    </div>
                )}

                <div
                    style={{ width: arrowBoxSize }}
                    className='flex-shrink-0 ml-auto bg-gradient-to-b from-[#9C6EF7] to-[#7727F7] aspect-square rounded-lg items-center justify-center flex'
                >
                    <div className='w-[33.33%] aspect-[10/13]'>
                        <Image src={`${basePath}/images/${isOpen ? 'up' : 'down'}-thin-arrow-image.png`} alt="Arrows" layout='responsive' width={100} height={100} />
                    </div>
                </div>
            </button>
            {isOpen && dropdownTop !== null && (
                <div
                    ref={dropdownRef}
                    className='fixed left-1/2 transform -translate-x-1/2 w-[88.75vw] aspect-[142/143] bg-[#1A1E27] flex flex-col overflow-hidden z-20 rounded-2xl'
                    style={{ top: `${dropdownTop}px` }}
                >
                    <div className="overflow-y-auto z-10 text-white border-b border-[#252A35] flex flex-col py-[3.75vw] px-[5.63vw] gap-[5.83vw]">
                        {list.map((item, i) => (
                            <button onClick={(() => handleItemClick(i))} className='flex hover:bg-[#272d3a] cursor-pointer items-center justify-between' key={i}>
                                <p>{item.Amount}</p>
                                <div className='flex justify-between  w-[20vw] items-center gap-[2.08vw]'>
                                    <p className='text-left font-bold'>{item.Token}</p>
                                    <div className='shrink-0 w-[5.21vw] aspect-square'>
                                        <Image src={basePath + item.TokenIconSrc} alt="Token Icon" layout='responsive' width={100} height={100} />
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className='py-[6.67vw] px-[5.63vw] text-[3.33vw] h-[29.38vw] gap-[6.88vw] flex flex-col justify-center'>
                        <div className='w-full'>
                            <Toggle toggleText='Hide 0 balances'
                                toggleWidth='12.36%'
                                aspectWidth={46}
                                aspectHeight={25}
                                placeTextLeft={true}
                                justifyBetween={true}
                                bgColor='#333946'
                            />
                        </div>
                        <div className='w-full'>
                            <Toggle
                                toggleText='Display in USD'
                                toggleWidth='12.36%' aspectWidth={46}
                                aspectHeight={25}
                                placeTextLeft={true}
                                justifyBetween={true}
                                bgColor='#333946'
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default WalletDropdown
