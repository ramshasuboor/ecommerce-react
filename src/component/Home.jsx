import React from 'react'
import LatestProduct from './common/LatestProduct'
import FeaturedPoduct from './common/FeaturedProduct'
import Hero from './common/Hero'
import Layout from './common/Layout'


const Home = () => {
  return (
    <>
      <Layout>
        <Hero/>
        <LatestProduct/>
        <FeaturedPoduct/>
      </Layout>
    </>
  )
}

export default Home