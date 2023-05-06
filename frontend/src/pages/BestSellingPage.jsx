import React, { useState, useEffect } from "react";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import Footer from "../components/Layout/Footer";
import { productData } from "../static/data";

const BestSellingPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const d = productData && productData.sort((a,b) => b.total_sell - a.total_sell);
        setData(d);
    }, []);
  //If the result of the subtraction is a positive number, it means that b has a higher total_sell value and should come before a in the sorted array. If the result is negative, a has a higher total_sell value and should come before b in the sorted array. If the result is 0, the order of a and b does not change.
  return (
   <>
      <div>
      <Header activeHeading={2} />
      <br />
      <br />
      <div className={`${styles.section}`}>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
        </div>
      </div>
      <Footer />
    </div>
   </>
  );
};

export default BestSellingPage;