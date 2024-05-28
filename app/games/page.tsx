'use client'

import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import walletList from '../components/wallet-list.json'
import MainComponents from '../components/MainComponents'
import SelectionDropdown from '../components/Dropdown/SelectionDropdown'
import Searchbar from '../components/Searchbar'
import GridList from '../components/GridList'

const CasinoPage = () => {
  const sortOptions = [
    { value: 'Recommended' },
    { value: 'A-Z' },
    { value: 'Z-A' },
  ]

  const provider = [
    { Provider: 'Mascot' },
    { Provider: 'Spinomenal' },
  ]

  const sort = sortOptions.map(sortOption => ({
    content: sortOption.value,
    onClick: () => {
      console.log(`Selected option: ${sortOption.value}`);
    }
  }));

  const providers = provider.map(providerss => ({
    content: providerss.Provider,
    onClick: () => {
      console.log(`Selected option: ${providerss.Provider}`);
    }
  }))

  return (
    <MainComponents>
      <div className='mt-4 flex flex-col gap-1 text-sm w-full'>
        <SelectionDropdown items={sort} placeHolderText='Sort:' placeArrowOnRight={true} />
        <SelectionDropdown items={providers} placeHolderText='Provider:' placeArrowOnRight={true} />
        <div className='bg-gray-700 rounded-lg'>
          <Searchbar placeholderText='Search Games' />
        </div>
      </div>
      <div className='border-b-2 border-black self-start px-5 flex gap-3 items-center'>
        <div className='h-6 w-6 bg-gray-300 rounded-full' />
        <p className='font-bold text-lg '>Name</p>
      </div>
      <div className='w-full'>
        <GridList list={walletList} />
      </div>
    </MainComponents>

  )
}

export default CasinoPage