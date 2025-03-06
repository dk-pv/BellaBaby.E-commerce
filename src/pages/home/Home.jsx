import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/service/Service'
import Gallery from '../../components/gallery/Gallery'
import MyProducts from '../../components/productsSection/MyProducts'

const Home = () => {
  return (
    <Layout>
        <HeroSection/>
        < Service/>
        <MyProducts/>
        <Gallery/>
    </Layout>
  )
}

export default Home;
