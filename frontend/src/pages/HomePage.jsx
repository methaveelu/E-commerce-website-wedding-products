import React from "react";
import Backdrop from "../components/Route/Backdrop/Backdrop";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Categories from "../components/Route/Categories/Categories";
import Events from "../components/Events/Events";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Sponsored from "../components/Route/Sponsored";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Backdrop />
      <Categories />
      <BestDeals />
      <Events />
      <FeaturedProduct />
      <Sponsored />
      <Footer />
    </div>
  );
};

export default HomePage;