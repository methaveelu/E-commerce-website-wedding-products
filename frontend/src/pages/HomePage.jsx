import React from 'react';
import Header from '../components/Layout/Header';
import Backdrop from "../components/Layout/Backdrop";
import FeaturedProduct from '../components/Route/FeaturedProduct/FeaturedProduct';
import Sponsored from "../components/Route/Sponsored.jsx";
import Footer from '../components/Layout/Footer.jsx';
import Categories from '../components/Route/Categories/Categories';
import BestDeals from '../components/Route/BestDeals/BestDeals'
const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1}/>
        <Backdrop />
        <FeaturedProduct />
        <Sponsored />
        <Categories/>
        <BestDeals/>
        <Footer />
    </div>
  )
}

export default HomePage;