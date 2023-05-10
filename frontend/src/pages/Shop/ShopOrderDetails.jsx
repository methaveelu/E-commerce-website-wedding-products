import React from "react";
import OrderDetails from "../../components/Shop/OrderDetails";
import Footer from "../../components/Layout/Footer";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";

const ShopOrderDetails = () => {
  return (
    <div>
      <DashboardHeader />
      <OrderDetails />
      <Footer />
    </div>
  );
};

export default ShopOrderDetails;