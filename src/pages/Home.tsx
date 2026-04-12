import React from 'react'
import { Banner, Categories, CollectionHighlight, FlashSell, Footer, Navbar, Testimonial, TopSellingPage, TrendingProducts, VideoSection } from '../components'
import LatestItem from '../components/LatestItem'

const Home = () => {
  return (
   <>
   <Navbar/>
   <Banner/>
   <Categories/>
   <CollectionHighlight/>
   <TrendingProducts/>
   <LatestItem/>
   <TopSellingPage/>
   <VideoSection/>
   <FlashSell/>
   <Testimonial/>
   <Footer/>
   </>
  )
}

export default Home
