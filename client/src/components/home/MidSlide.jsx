import React from 'react'
import SlideProducts from './SlideProducts'

const MidSlide = ({ products, title, timer }) => {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
  return (
    <div className='flex'>
      <div className='w-full md:w-[85%]'>
        <SlideProducts products={products}
          title={title}
          timer={timer}
        />
      </div>
      <div className='bg-[#FFFF] p-[5px] mt-[10px] ml-[10px] w-[15%] hidden md:block'>
        <img src={adURL} alt="ad" className='w-[217px] mx-auto' />
      </div>
    </div>
  )
}

export default MidSlide
