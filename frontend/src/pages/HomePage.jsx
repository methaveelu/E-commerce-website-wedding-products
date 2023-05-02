import React from 'react';
import Header from '../components/Layout/Header';
import Hero from "../components/Layout/Hero";
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct';
import Sponsored from "../components/Route/Sponsored.jsx";
import Footer from '../components/Layout/Footer.jsx';

const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Hero />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage;