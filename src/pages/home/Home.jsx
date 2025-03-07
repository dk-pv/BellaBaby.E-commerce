import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/service/Service'
import Gallery from '../../components/gallery/Gallery'
import MyProducts from '../../components/productsSection/MyProducts'

const Home = () => {
  return (
    <>
        <HeroSection/>
        < Service/>
        <MyProducts/>
        <Gallery/>
    </>
  )
}

export default Home;
