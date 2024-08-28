import React, { useEffect } from 'react'
import Navbar from './Navbar'
import SlideBanner from './SlideBanner'
import SlideProducts from './SlideProducts'
import { getProducts } from '../../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>

      <Navbar></Navbar>
      <SlideBanner></SlideBanner>
      <MidSlide products={products} title="Deal of the Day" timer={true} />
      <MidSection />
      <SlideProducts products={products} title="Discount for You" timer={false} />
      <SlideProducts products={products} title="Suggested Items" timer={false} />
      <SlideProducts products={products} title="Top slection" timer={false} />
      <SlideProducts products={products} title="Recommended Ttems" timer={false} />
      <SlideProducts products={products} title="Trednding Offers" timer={false} />
      <SlideProducts products={products} title="Seasons top Picks" timer={false} />
      <SlideProducts products={products} title="Top deals on Accessories" timer={false} />

    </>
  )
}

export default Home
