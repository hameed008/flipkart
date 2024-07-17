import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (

    <div className='ml-[20px] lg:ml-[0px] mr-[20px] relative'>
      <input
        type="text"
        className="w-full bg-white px-[15px] py-[6px] text-md rounded-sm border-none duration-300 outline-none"
        placeholder='Search for products, brands and more' />
      <SearchIcon className='absolute  text-[#2874F0] top-[6px] right-[7px]' fontSize='medium' />
    </div>

  )
}

export default Search
