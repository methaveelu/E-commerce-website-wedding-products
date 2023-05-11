import React from "react";
import Backdrop from "../components/Layout/Backdrop";
import BestDeals from "../components/BestDeals";
import Categories from "../components/Categories";
import Events from "../components/Events/Events";
import FeaturedProduct from "../components/FeaturedProduct";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import Sponsored from "../components/Sponsored";

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