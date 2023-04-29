import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Routes/Hero";
import Categories from "../components/Routes/Categories";
import BestDeals from "../components/Routes/BestDeals";
import FeaturedProduct from "../components/Routes/FeaturedProduct";
import Sponsored from "../components/Routes/Sponsored";
import Footer from "../components/Layout/Footer";

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        <Categories />
        <BestDeals />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage