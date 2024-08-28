import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Button, Divider } from '@mui/material';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const SlideProducts = ({ products, title, timer }) => {
  // console.log(products)
  const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
  const renderer = ({ hours, minutes, seconds }) => {
    return <span>{hours}: {minutes}: {seconds} Left</span>
  }


  return (
    <div className='mt-[10px] bg-white'>
      <div className='py-[15px] px-[20px] flex items-center'>
        <p className='font-bold'>{title}</p>
        {
          timer &&
          <div className='flex ml-[20px] items-center text-gray-400 text-md font-bold '>
            <img src={timerURL} alt="timer" className='w-[24px]' />
            <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
          </div>
        }
        <Button variant='contained' color='primary' sx={{
          ml: 'auto',
          backgroundColor: '#2874f0',
          borderRadius: '2px',
          fontSize: '13px',
          fontWeight: '600'
        }}>View All</Button>
      </div>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {
          products.map((product, i) => (
            <div className='text-center py-[25px] px-[15px]' key={i}>
              <img src={product.url} alt="product" className='w-auto h-[160px] mx-auto' />
              <p className='text-[14px] mt-[5px] font-bold text-[#212121]'>{product.title.shortTitle}</p>
              <p className='text-[14px] mt-[5px] text-green-500'>{product.discount}</p>
              <p className='text-[14px] mt-[5px] text-[#212121] opacity-[.6]'>{product.tagline}</p>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default SlideProducts
