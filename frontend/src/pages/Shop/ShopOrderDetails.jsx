import React from "react";
import OrderDetails from "../../components/Shop/OrderDetails";
import Footer from "../../components/Layout/Footer";
import ShopDashboardHeader from "../../components/Shop/Layout/ShopDashboardHeader";

const ShopOrderDetails = () => {
  return (
    <div>
      <ShopDashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;