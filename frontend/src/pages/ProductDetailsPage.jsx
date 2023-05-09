import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const { getAllProducts } = useSelector((state) => state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const data = getAllProducts && getAllProducts.find((i) => i._id === id);
    setData(data);
  }, [getAllProducts]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
// refactored