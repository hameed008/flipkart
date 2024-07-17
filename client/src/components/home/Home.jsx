import React, { useEffect } from 'react'
import Navbar from './Navbar'
import SlideBanner from './SlideBanner'
import SlideProducts from './SlideProducts'
import { getProducts } from '../../../redux/action/productAction'
import { useDispatch, useSelector } from 'react-redux'
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
      <SlideProducts products={products}></SlideProducts>


    </>
  )
}

export default Home
