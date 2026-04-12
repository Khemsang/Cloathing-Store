import React from 'react'
import { Banner, Categories, CollectionHighlight, Contact, FlashSell, Footer, Navbar, Testimonial, TopSellingPage, TrendingProducts, VideoSection } from '../components'
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
   <Contact/>
   <Footer/>
   </>
  )
}

export default Home
