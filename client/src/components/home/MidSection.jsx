import React from 'react'
import { imageURL } from '../../constants/constant'

const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
  return (
    <>
      <div className='grid lg:grid-cols-3 mt-[10px] justify-between px-[10px]'>
        {
          imageURL.map(image => (
            <img src={image} alt='image' className='w-full' />
          ))
        }
      </div>

      <div>
        <img src={url} alt='covid image' className='mt-[10px] w-full mx-[10px] h-[120px] md:h-full' />
      </div>

    </>
  )
}

export default MidSection
