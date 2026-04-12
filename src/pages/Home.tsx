import React from 'react'
import { Banner, Categories, CollectionHighlight, Footer, Navbar, TopSellingPage, TrendingProducts, VideoSection } from '../components'
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
   <Footer/>
   </>
  )
}

export default Home
