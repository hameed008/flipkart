import React from 'react'
import { navData } from '../../constants/constant'
//console.log(navData)
const Navbar = () => {
  return (
    <div className='max-w-[1536px] h-[140px] flex justify-between items-center mx-auto mt-[80px] mb-4 py-[10px] px-[20px] lg:px-[155px] bg-white shadow-sm rounded-md'>
      {navData.map((data, i) => {
        return (
          <div className='flex flex-col justify-center items-center mx-5 lg:mx-[0px]' key={i}>
            <img src={data.url} alt="" className='w-[65px] ' />

            <p className='w-[full]'>{data.text}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Navbar
